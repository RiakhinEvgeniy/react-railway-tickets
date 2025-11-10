import { useSelector } from 'react-redux';
import { selectFoodById } from '../../redux/selectors/foodSelectors';
import './TotalCard.scss';
import type { RootState } from '../../redux/store';

function TotalCard() {
  const foodId = useSelector((state: RootState) => state.idData.idObject);
  const food = useSelector((state) => selectFoodById(state, foodId as number));

  return (
    <div className="totalcard">
      <h2 className="totalcard__title">Bill Details</h2>
      <div className="totalcard__info">
        <span>Base Ticket Fare</span>
        <span>$500</span>
      </div>
      <div className="totalcard__info">
        {food ? <span>{`${food.nameOfDish}`}</span> : 'Without Food'}
        {food ? <span>{`$${food.price}`}</span> : ''}
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
