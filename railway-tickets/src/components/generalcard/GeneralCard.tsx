import { useSelector } from 'react-redux';
import Schedule from '../schedule/Schedule';
import TicketCard from '../ticketcard/TicketCard';
import type { RootState } from '../../redux/store';
import './GeneralCard.scss';
import type { Ticket } from '../../redux/ticketsSlice';
import { useTicketId } from '../../context/ticketId';

interface TicketProps {
  ticketData: Ticket;
}

function GeneralCard({ ticketData }: TicketProps) {
  const departureCity = useSelector(
    (state: RootState) => state.formData.fromCity
  );
  const numberOfTrain = Math.floor(Math.random() * 100000);

  const { saveTicketId } = useTicketId();

  function handlSelectTicket() {
    saveTicketId(+ticketData.id);
  }
  return (
    <div className="general-card" onClick={handlSelectTicket}>
      <h2
        style={{ marginLeft: '15px' }}
      >{`${numberOfTrain} - ${departureCity}`}</h2>
      <div className="general-card__everyday-box">
        <h3 style={{ fontWeight: '500' }}>Runs on</h3>
        <h3 className="general-card__everyday-box__everyday">Everyday</h3>
      </div>
      <Schedule ticketData={ticketData} />
      <div className="general-card__ticketcard-box">
        <TicketCard
          backgroundColor="#7DCFB6"
          info={{ seat: '1A', code: 'AVL-046', price: '$500' }}
        />
        <TicketCard
          backgroundColor="#FBD1A2"
          info={{ seat: '2A', code: 'AVL-006', price: '$1000' }}
        />
        <TicketCard
          backgroundColor="#F79256"
          info={{ seat: '3A', code: 'WL-4', price: '$1500' }}
        />
      </div>
    </div>
  );
}

export default GeneralCard;
