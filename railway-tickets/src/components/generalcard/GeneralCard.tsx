import Schedule from "../schedule/Schedule";
import TicketCard from "../ticketcard/TicketCard";
import "./GeneralCard.scss";

function GeneralCard() {
  return (
    <div className="general-card">
      <h2>22426 - Berlin</h2>
      <div className="general-card__everyday-box">
        <h3 style={{ fontWeight: "500" }}>Runs on</h3>
        <h3 className="general-card__everyday-box__everyday">Everyday</h3>
      </div>
      <Schedule />
      <div className="general-card__ticketcard-box">
        <TicketCard backgroundColor="#7DCFB6" info={{seat: "1A", code: "AVL-046", price: "$500"}}/>
        <TicketCard backgroundColor="#FBD1A2" info={{seat: "2A", code: "AVL-006", price: "$1000"}}/>
        <TicketCard backgroundColor="#F79256" info={{seat: "3A", code: "WL-4", price: "$1500"}}/>
      </div>
    </div>
  );
}

export default GeneralCard;
