import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import { clearId, saveId } from '../../redux/idSlice';
import './Food.scss';

interface FoodProps {
  id?: number;
  imageUrl: string;
  price: number;
  nameOfDish: string;
  detailsOfDish: string;
}

function Food({ id, imageUrl, price, nameOfDish, detailsOfDish }: FoodProps) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedId = useSelector((state: RootState) => state.idData.idObject);
  const isDisabled = selectedId === id;

  const handleClickOnAddToTicket = () => {
    dispatch(saveId({ idObject: id as number }));
  };

  const handleClickOnCancelSelectedFood = () => {
    dispatch(clearId());
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
          disabled={isDisabled}
        >
          Add to Ticket
        </button>
        <button
          className="food__btn"
          type="button"
          onClick={handleClickOnCancelSelectedFood}
          disabled={!isDisabled}
        >
          Cancel selected food
        </button>
      </div>
    </div>
  );
}

export default Food;
