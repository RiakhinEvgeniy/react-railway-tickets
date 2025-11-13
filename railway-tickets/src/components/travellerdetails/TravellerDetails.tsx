import { useSelector } from 'react-redux';
import './TravellerDetails.scss';
import type { RootState } from '../../redux/store';
import { selectTotalPriceDetails } from '../../redux/selectors/totalSelectors';

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

function TravellerDetails({ travellerInfo }: TravellerInfoProps) {
  const amountBaggage = useSelector(
    (state: RootState) => state.generalCounterData.amountBaggage
  );
  const amountFood = useSelector(
    (state: RootState) => state.generalCounterData.amountFood
  );
  const total = useSelector(selectTotalPriceDetails);
  const { name, age, email } = travellerInfo;
  return (
    <div className="traveller">
      <h2>Traveller Details</h2>
      <div className="traveller__info">
        <span>{name}</span>
        <span>{age} years</span>
      </div>
      <div className="traveller__info">
        <span>Extra Baggage</span>
        <span>{amountBaggage}</span>
      </div>
      <div className="traveller__info">
        <span>{total.nameOfDish}</span>
        <span>{amountFood}</span>
      </div>
      <div className="traveller__info__email">
        <span>E-Tickets will be sent to:</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default TravellerDetails;
