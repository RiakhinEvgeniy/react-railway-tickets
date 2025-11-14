import { useSelector } from 'react-redux';
import './TravellerDetailsSuccess.scss';
import type { RootState } from '../../redux/store';
import { selectTotalPriceDetails } from '../../redux/selectors/totalSelectors';

function TravellerDetailsSuccess() {
  const passengerInfo = useSelector(
    (state: RootState) => state.passengerData.passenger
  );
  const amountBaggage = useSelector(
    (state: RootState) => state.generalCounterData.amountBaggage
  );
  const amountFood = useSelector(
    (state: RootState) => state.generalCounterData.amountFood
  );
  const total = useSelector(selectTotalPriceDetails);
  return (
    <div className="travellersuc">
      <h2>Traveller Details</h2>
      <div className="travellersuc__info">
        <span>{passengerInfo.fullName}</span>
      </div>
      <div className="travellersuc__info-ticket">
        <span>Booking Status : Confirmed (CNF)</span>
        <span>Seat/Coach no. : Class 2A & Tatkal Quota</span>
        <span>{`Extra Baggage: ${amountBaggage}`}</span>
        {total.namesOfDish.length > 0 ? (
          total.namesOfDish.map((nameOfDish, i) => (
            <span key={i}>{`${nameOfDish}: ${amountFood}`}</span>
          ))
        ) : (
          <span>Food not ordered.</span>
        )}
      </div>
      <div className="travellersuc__info__email">
        <span>E-Tickets will be sent to:</span>
        <span>{passengerInfo.email}</span>
      </div>
      <div className="travellersuc__total">
        <span className="travellersuc__total__text">Total Fare</span>
        <span className="travellersuc__total__text">{`$${total.total}`}</span>
      </div>
    </div>
  );
}

export default TravellerDetailsSuccess;
