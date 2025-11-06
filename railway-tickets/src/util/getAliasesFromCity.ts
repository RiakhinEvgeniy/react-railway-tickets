import { useSelector } from 'react-redux';
import filterTicketsByCities from './filterTickets';
import { selectAllCitiesArray } from '../redux/selectors/citySelectors';

export function getAliasOfCityDeparture() {
  const avilableTickets = filterTicketsByCities();
  const allCities = useSelector(selectAllCitiesArray);

  if (!avilableTickets || !allCities) {
    throw new Error('No tickets avilable!');
  }

  const alias = allCities.find(
    (city) => city.name === avilableTickets[0].ETD.station
  );

  return alias?.alias;
}

export function getAliasOfCityArrival() {
  const avilableTickets = filterTicketsByCities();
  const allCities = useSelector(selectAllCitiesArray);

  if (!avilableTickets || !allCities) {
    throw new Error('No tickets avilable!');
  }

  const alias = allCities.find(
    (city) => city.name === avilableTickets[0].ETA.station
  );

  return alias?.alias;
}
