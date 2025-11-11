import { useSelector } from 'react-redux';
import { selectFoodById } from '../../redux/selectors/foodSelectors';
import './TotalCard.scss';
import type { RootState } from '../../redux/store';
import { selectTotalPriceDetails } from '../../redux/selectors/totalSelectors';

function TotalCard() {
  const foodId = useSelector((state: RootState) => state.idData.idObject);
  const food = useSelector((state) =>
    foodId === -1 ? undefined : selectFoodById(state, foodId as number)
  );

  const total = useSelector(selectTotalPriceDetails);

  return (
    <div className="totalcard">
      <h2 className="totalcard__title">Bill Details</h2>
      <div className="totalcard__info">
        <span>Base Ticket Fare</span>
        <span>{`$${total.baseFare}`}</span>
      </div>
      <div className="totalcard__info">
        {food ? (
          <span>{`${total.nameOfDish}`}</span>
        ) : (
          <span style={{ color: 'lightblue' }}>Without Food</span>
        )}
        <span>{`$${total.foodPrice}`}</span>
      </div>
      <div className="totalcard__info">
        <span>Extra Baggage</span>
        <span>{`$${total.baggagePrice}`}</span>
      </div>
      <div className="totalcard__info">
        <span>CGST & SGST</span>
        <span>{`$${total.tax}`}</span>
      </div>
      <div className="totalcard__info">
        <span>Discount</span>
        <span>{`$${total.discount}`}</span>
      </div>
      <div className="totalcard__total">
        <h2 className="totalcard__title">Total Charge</h2>
        <h2 className="totalcard__title">{`$${total.total}`}</h2>
      </div>
    </div>
  );
}

export default TotalCard;
