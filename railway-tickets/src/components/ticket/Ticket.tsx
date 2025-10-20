import Schedule from "../schedule/Schedule";
import "./Ticket.scss";

interface TicketProps {
  backgroundColor?: string;
}

function Ticket({backgroundColor}: TicketProps) {

  return (
    <div className={`ticket ticket__${backgroundColor}`}>
        <h2>Boarding Details</h2>
      <div className="ticket__info">
        <h2>22426 - Berlin</h2>
        <span style={{color: "#A297EB", fontWeight: "500"}}>Class 2A & Ticket Type</span>
      </div>
      <Schedule />
    </div>
  );
}

export default Ticket;
