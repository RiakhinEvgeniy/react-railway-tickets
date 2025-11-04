import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

function filterTicketsByCities() {
  const arrivalCity = useSelector((state: RootState) => state.formData.toCity);
  const departureCity = useSelector(
    (state: RootState) => state.formData.fromCity
  );
  const tickets = useSelector((state: RootState) => state.ticketsData.tickets);
  const avilableTickets = tickets.filter(
    (ticket) =>
      ticket.ETD.station === departureCity && ticket.ETA.station === arrivalCity
  );
  return avilableTickets;
}

export default filterTicketsByCities;
