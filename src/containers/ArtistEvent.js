import React from 'react';
import {
  Table,
} from 'reactstrap';
import { BoldTd } from 'components/index';
import PropTypes from 'prop-types';

const ArtistEvent = ({ event: { id, venue, datetime } } ) => {
  return (
    <Table key={`table-${id}`}>
      <tbody key={`tbody-${id}`}>
        <tr key={`tr-venue-name-${venue.name}-${id}`}>
          <BoldTd key={`boldtd-venue-name-${venue.name}-${id}`}>Venue</BoldTd>
          <td key={`td-venue-name-${venue.name}-${id}`}>{venue.name}</td>
        </tr>
        <tr key={`tr-venue-city-${venue.city}-${id}`}>
          <BoldTd key={`boldtd-venue-city-${venue.city}-${id}`}>City</BoldTd>
          <td key={`td-venue-city-${venue.city}-${id}`}>{venue.city}</td>
        </tr>
        <tr key={`tr-venue-country-${venue.country}-${id}`}>
          <BoldTd key={`boldtd-venue-country-${venue.country}-${id}`}>Country</BoldTd>
          <td key={`td-venue-country-${venue.country}-${id}`}>{venue.country}</td>
        </tr>
        <tr key={`tr-venue-date-${venue.datetime}-${id}`}>
          <BoldTd key={`boldtd-venue-date-${venue.datetime}-${id}`}>Date</BoldTd>
          <td key={`td-venue-date-${venue.datetime}-${id}`}>{datetime}</td>
        </tr>
      </tbody>
    </Table>
)};

ArtistEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    venue: PropTypes.string,
    datetime: PropTypes.string,
  }).isRequired,
};

export default ArtistEvent;
