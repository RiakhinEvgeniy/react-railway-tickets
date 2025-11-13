import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { clearId, saveId } from '../../redux/idSlice';
import { addAmount } from '../../redux/generalCounter';
import { addId, removeId } from '../../redux/arrayIdsSlice';
import './Food.scss';

interface FoodProps {
  id: number;
  imageUrl: string;
  price: number;
  nameOfDish: string;
  detailsOfDish: string;
}

function Food({ id, imageUrl, price, nameOfDish, detailsOfDish }: FoodProps) {
  const amountFood = useSelector(
    (state: RootState) => state.generalCounterData.amountFood
  );
  const amountBaggage = useSelector(
    (state: RootState) => state.generalCounterData.amountBaggage
  );
  const dispatch = useDispatch<AppDispatch>();

  const selectedIds = useSelector(
    (state: RootState) => state.arrayIdsData.selectedIds
  );

  const isCurrentSelectedId = selectedIds.includes(id);

  const handleClickOnAddToTicket = () => {
    dispatch(saveId({ idObject: id as number }));
    dispatch(addId(id));
    if (amountFood >= 0) {
      dispatch(addAmount({ amountFood: amountFood + 1, amountBaggage }));
    }
  };

  const handleClickOnCancelSelectedFood = () => {
    dispatch(clearId());
    dispatch(removeId(id));
    if (amountFood > 0) {
      dispatch(addAmount({ amountFood: amountFood - 1, amountBaggage }));
    }
  };
  return (
    <div className="food">
      <div
        className="food__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="food__info">
        <div className="food__info__title">
          <span>{nameOfDish}</span>
          <span>{detailsOfDish}</span>
        </div>
        <span>{price}</span>
        <button
          className="food__btn"
          type="button"
          onClick={handleClickOnAddToTicket}
          disabled={isCurrentSelectedId}
        >
          Add to Ticket
        </button>
        {amountFood > 0 ? (
          <button
            className="food__btn"
            type="button"
            onClick={handleClickOnCancelSelectedFood}
          >
            Cancel selected food
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Food;
