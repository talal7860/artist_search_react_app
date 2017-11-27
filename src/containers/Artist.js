import React, { Component } from 'react';
import { Container, SearchForm } from 'components/index'
import { Row, Col, Alert } from 'reactstrap';
import { getRequest } from 'utils/HttpUtil';
import { getCache, setCache } from 'utils/CacheUtil';
import { ArtistDetailCard, ArtistEvents } from './index';

class Artist extends Component {
	constructor(props) {
		super(props);
		this.state = {
      error: null,
      searchTerm: "",
      artist: null,
      marginTop: '35%',
      loading: false,
      nodata: false,
      neevents: false,
      events: [],
    };
		this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
    this.searchEvents = this.searchEvents.bind(this);
	}

	componentDidMount() {
	}

	async onSearch(e) {
    e.preventDefault();
    this.setState({ nodata: false, error: null, events: [], artist: null });
    const {
      state: { searchTerm },
    } = this;
    if (searchTerm) {
      this.setState({ loading: true });
      const foundArtist = await this.searchArtist(searchTerm);
      if (foundArtist) {
        await this.searchEvents(searchTerm);
      }
      this.setState({ loading: false });
    }
	}

  async searchArtist(searchTerm) {
    try {
      let artist = null;
      const cacheKey = `${searchTerm}-item`;
      artist = await getCache(cacheKey);
      if (!artist) {
        artist = await getRequest(`/artists/${searchTerm}`)
        await setCache(cacheKey, artist);
      }
      if (artist) {
        this.setState({ artist, marginTop: '10%' });
        return true;
      } else {
        throw new Error("no data found");
      }
    } catch(e) {
      this.setState({ artist: null, events: [], nodata: true, marginTop: '28%' });
      return false;
    }
  }

  async searchEvents(searchTerm) {
    try {
      const cacheKey = `${searchTerm}-events`;
      let events = await getCache(cacheKey);
      if (!events) {
        events = await getRequest(`/artists/${searchTerm}/events`);
      }
      if (events && this.state.artist) {
        await setCache(cacheKey, events);
        this.setState({ events })
      }
    } catch(e) {
      this.setState({ events: []});
    }
  }

  onChange(e) {
    this.setState({ searchTerm: e.target.value })
  }

	render() {
		const {
      onSearch,
      onChange,
			state: {
        searchTerm,
        error,
        artist,
        marginTop,
        loading,
        nodata,
        events,
      },
		} = this;
		return (
			<Container className={loading ? 'container-loading': ''}>
        <Row>
          <Col md="12" className="d-flex justify-content-center">
            {error ? (
              <Alert color='danger'>{error}</Alert>
            ) : null}
            <SearchForm loading={loading} style={{ marginTop }} value={searchTerm} onSubmit={onSearch} onChange={onChange} placeholder="Search artist name" />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {artist ? (<ArtistDetailCard artist={artist} />) : null}
            {nodata ? (<Alert color="danger"> Oops! No artists matched your query.</Alert>): null}
            {loading ? (<Alert color="info"> Searching...</Alert>): null}
          </Col>
          <Col md="12">
            {events.length > 0 ? (<ArtistEvents events={events} />) : null}
          </Col>
        </Row>
			</Container>
		);
	}
}

export default Artist;
