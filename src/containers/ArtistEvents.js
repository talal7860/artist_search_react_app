import React, { Component } from 'react';
import { Card } from 'components/index';
import { ArtistEvent } from 'containers/index';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';


class ArtistEvents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: {
        events,
      },
    } = this;

    const slides = events.map(event => (
        <ArtistEvent
          key={`artist-${event.id}`}
          onExiting={this.onExiting}
          onExited={this.onExited}
          event={event}
        />
      )
    );

    return (
      <Card>
        <h2 className="display-6">Upcoming Events</h2>
        <hr className="my-2" />
        <Carousel showArrows={true}>
          {slides}
        </Carousel>
      </Card>
    );
  }
}

ArtistEvents.propTypes = {
  events: PropTypes.array.isRequired,
};

export default ArtistEvents;
