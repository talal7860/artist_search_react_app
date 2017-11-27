import React, { Component } from 'react';
import { Table, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { ImageModal, Card, BoldTd } from 'components/index';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Img = styled.img`
  border-radius: 10%;
`;

class ArtistDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.openUrl = this.openUrl.bind(this);
  }

  toggleModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      modal: !this.state.modal,
    });
  }

  openUrl(e, url) {
    e.preventDefault();
    window.open(url);
  }

  render() {
    const {
      toggleModal,
      openUrl,
      props: {
        artist: {
          thumb_url,
          image_url,
          name,
          url,
          facebook_page_url,
          mbid,
          tracker_count,
        },
      },
      state: { modal },
    } = this;

    return (
      <Card>
        <Row>
          <Col lg="4">
            <a className='right' href={image_url} onClick={toggleModal}>
              <Img className='media-object' src={thumb_url} alt="Generic placeholder image" />
            </a>
          </Col>
          <Col lg="8">
            <h1 className="display-4">{name}</h1>
            <hr className="my-2" />
            <Table>
              <tbody>
                <tr>
                  <BoldTd>MBID</BoldTd>
                  <td>{mbid}</td>
                </tr>
                <tr>
                  <BoldTd>Tracker Count</BoldTd>
                  <td>{tracker_count}</td>
                </tr>
                <tr>
                  <BoldTd></BoldTd>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Col lg="1">
                        <a href={facebook_page_url} onClick={(e) => openUrl(e, facebook_page_url)}>
                          <FontAwesome size="lg" name="facebook" />
                        </a>
                      </Col>
                      <Col lg="1">
                        <a href={url} onClick={(e) => openUrl(e, url)}>
                          <FontAwesome size="lg" name="chrome" />
                        </a>
                      </Col>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <ImageModal title={name} image={image_url} modal={modal} toggle={toggleModal} />
        </Row>
      </Card>
    );
  }
}

ArtistDetailCard.propTypes = {
  artist: PropTypes.shape({
    thumb_url: PropTypes.string,
    image_url: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    facebook_page_url: PropTypes.string,
    mbid: PropTypes.string,
    tracker_count: PropTypes.string,
  }).isRequired,
}

export default ArtistDetailCard;
