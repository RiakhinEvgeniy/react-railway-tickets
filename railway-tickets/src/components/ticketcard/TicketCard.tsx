import "./TicketCard.scss";

interface TicketInfo {
    seat: string;
    code: string;
    price: string;
}

interface TicketCardProps {
    backgroundColor: string;
    info: TicketInfo;
}

function TicketCard({backgroundColor, info}: TicketCardProps) {
    const {seat, code, price} = info;
  return (
    <div className="ticketcard">
      <div className="ticketcard__ticketcard-box" style={{backgroundColor}}>
        <div className="ticketcard__ticketcard-box__info">
          <span>{seat}</span>
          <span>{code}</span>
        </div>
        <div className="ticketcard__ticketcard-box__info">
          <span>Ticket</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
