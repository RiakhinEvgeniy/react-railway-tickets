import "./TotalCard.scss";

function TotalCard() {
  return (
    <div className="totalcard">
      <h2 className="totalcard__title">Bill Details</h2>
      <div className="totalcard__info">
        <span>Base Ticket Fare</span>
        <span>$100</span>
      </div>
      <div className="totalcard__info">
        <span>Paneer Tikka Rice Bowl - Mini</span>
        <span>$200</span>
      </div>
      <div className="totalcard__info">
        <span>Extra Baggage</span>
        <span>$300</span>
      </div>
      <div className="totalcard__info">
        <span>CGST & SGST</span>
        <span>$400</span>
      </div>
      <div className="totalcard__info">
        <span>Discount</span>
        <span>$500</span>
      </div>
      <div className="totalcard__total">
        <h2 className="totalcard__title">Total Charge</h2>
        <h2 className="totalcard__title">$5600</h2>
      </div>
    </div>
  );
}

export default TotalCard;
