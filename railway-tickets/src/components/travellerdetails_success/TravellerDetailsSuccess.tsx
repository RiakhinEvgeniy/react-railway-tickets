import "./TravellerDetailsSuccess.scss";

interface TravellerInfo {
  name: string;
  extraBaggage?: number;
  nameOfFood?: string;
  extraFood?: number;
  email: string;
}

interface TravellerInfoProps {
  travellerInfo: TravellerInfo;
}

function TravellerDetailsSuccess({ travellerInfo }: TravellerInfoProps) {
  const {
    name,
    email,
    extraBaggage = 0,
    nameOfFood = "Paneer Ticca Rice Bowl - Mini",
    extraFood = 0,
  } = travellerInfo;
  return (
    <div className="travellersuc">
      <h2>Traveller Details</h2>
      <div className="travellersuc__info">
        <span>{name}</span>
      </div>
      <div className="travellersuc__info-ticket">
        <span>Booking Status : Confirmed (CNF)</span>
        <span>Seat/Coach no. : Class 2A & Tatkal Quota</span>
        <span>{`Extra Baggage: ${extraBaggage}`}</span>
        <span>{`${nameOfFood}: ${extraFood}`}</span>
      </div>
      <div className="travellersuc__info__email">
        <span>E-Tickets will be sent to:</span>
        <span>{email}</span>
      </div>
      <div className="travellersuc__total">
        <span className="travellersuc__total__text">Total Fare</span>
        <span className="travellersuc__total__text">$1740</span>
      </div>
    </div>
  );
}

export default TravellerDetailsSuccess;
