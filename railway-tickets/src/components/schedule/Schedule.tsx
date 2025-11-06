import type { Ticket } from '../../redux/ticketsSlice';
import './Schedule.scss';

interface TicketProps {
  ticketData: Ticket;
}

function Schedule({ ticketData }: TicketProps) {
  const fontStyleH3 = {
    fontWeight: '500',
  };
  if (!ticketData) {
    return <div>Do not select ticket</div>;
  }
  return (
    <div className="schedule">
      <div>
        <h3>{ticketData.ETD.day}</h3>
        <h3 style={fontStyleH3}>{`${ticketData.ETD.time} pm`}</h3>
        <h3 style={fontStyleH3}>{`${ticketData.ETD.station} - NDLS`}</h3>
      </div>
      <span style={{ color: 'rgba(1, 4, 0, 0.5019607843)' }}>
        {ticketData.totalTime}
      </span>
      <div>
        <h3>{ticketData.ETA.day}</h3>
        <h3 style={fontStyleH3}>{`${ticketData.ETA.time} am`}</h3>
        <h3 style={fontStyleH3}>{`${ticketData.ETA.station} - LJN`}</h3>
      </div>
    </div>
  );
}

export default Schedule;
