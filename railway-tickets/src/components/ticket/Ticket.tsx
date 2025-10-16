import Schedule from "../schedule/Schedule";
import "./Ticket.scss";

function Ticket() {
  return (
    <div className="ticket">
        <h2>Boarding Details</h2>
      <div className="ticket__info">
        <h2>22426 - Berlin</h2>
        <span style={{color: "#A297EB"}}>Class 2A & Ticket Type</span>
      </div>
      <Schedule />
    </div>
  );
}

export default Ticket;
