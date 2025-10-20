import './TravellerDetails.scss'

interface TravellerInfo {
    name: string;
    age: string;
    extraBaggage?: number;
    nameOfFood?: string;
    extraFood?: number;
    email: string;
}

interface TravellerInfoProps {
    travellerInfo: TravellerInfo;
}

function TravellerDetails({travellerInfo}: TravellerInfoProps) {
    const {name, age, email, extraBaggage = 0, nameOfFood = "FOOD", extraFood = 0} = travellerInfo;
  return (
    <div className="traveller">
        <h2>Traveller Details</h2>
        <div className="traveller__info">
            <span>{name}</span>
            <span>{age} years</span>
        </div>
        <div className="traveller__info">
            <span>Extra Baggage</span>
            <span>{extraBaggage}</span>
        </div>
        <div className="traveller__info">
            <span>{nameOfFood}</span>
            <span>{extraFood}</span>
        </div>
        <div className="traveller__info__email">
            <span>E-Tickets will be sent to:</span>
            <span>{email}</span>
        </div>
    </div>
  )
}

export default TravellerDetails