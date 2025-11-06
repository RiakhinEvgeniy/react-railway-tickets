import { useSelector } from 'react-redux';
import { useTicketId } from '../../context/ticketId';
import filterTicketsByCities from '../../util/filterTickets';
import Schedule from '../schedule/Schedule';
import './Ticket.scss';
import type { RootState } from '../../redux/store';

interface TicketProps {
  backgroundColor?: string;
}

function Ticket({ backgroundColor }: TicketProps) {
  const avilableTickets = filterTicketsByCities();
  const { getTicketId } = useTicketId();
  const id = getTicketId();
  const indexSelectedTicket = avilableTickets.findIndex(
    (ticket) => +ticket.id === id
  );
  const selectedTicket = avilableTickets[indexSelectedTicket];
  const numberOfTrain = useSelector(
    (state: RootState) => state.trainNumberData.numberOfTrain
  );

  if (!selectedTicket) {
    return <h2>No tickets selected.</h2>;
  }

  return (
    <div className={`ticket ticket__${backgroundColor}`}>
      <h2>Boarding Details</h2>
      <div className="ticket__info">
        <h2>{`${numberOfTrain} - ${selectedTicket.ETD.station}`}</h2>
        <span style={{ color: '#A297EB', fontWeight: '500' }}>
          Class 2A & Ticket Type
        </span>
      </div>
      <Schedule ticketData={avilableTickets[indexSelectedTicket]} />
    </div>
  );
}

export default Ticket;
