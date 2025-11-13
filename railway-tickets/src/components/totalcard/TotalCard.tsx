import { useSelector } from 'react-redux';
import './TotalCard.scss';
import { selectTotalPriceDetails } from '../../redux/selectors/totalSelectors';

function TotalCard() {
  const total = useSelector(selectTotalPriceDetails);

  return (
    <div className="totalcard">
      <h2 className="totalcard__title">Bill Details</h2>
      <div className="totalcard__info">
        <span>Base Ticket Fare</span>
        <span>{`$${total.baseFare}`}</span>
      </div>
      <div className="totalcard__info">
        <div className="totalcard__info__box-for-name">
          {total.namesOfDish.length > 0 ? (
            total.namesOfDish.map((nameOfDish, i) => (
              <span
                key={i}
                className="totalcard__info__box-for-name__name-dish"
              >
                {nameOfDish}
              </span>
            ))
          ) : (
            <span style={{ color: 'lightblue' }}>Without Food</span>
          )}
        </div>
        <div className="totalcard__info__box-for-name">
          {total.namesOfDish.length > 0
            ? total.foodPrice.map((price, i) => (
                <span
                  key={i}
                  className="totalcard__info__box-for-name__name-dish"
                >{`$${price}`}</span>
              ))
            : 0}
        </div>
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
