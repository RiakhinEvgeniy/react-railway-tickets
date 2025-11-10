import { useDispatch } from 'react-redux';
import './Food.scss';
import type { AppDispatch } from '../../redux/store';
import { clearId, saveId, type IdState } from '../../redux/idSlice';
import { useState } from 'react';

interface FoodProps {
  id?: number;
  imageUrl: string;
  price: number;
  nameOfDish: string;
  detailsOfDish: string;
}

//при нажатии на кнопку, получать id выбранного блюда
// сохранять id в context для отображения в выбранного блюда в результирующем счете

function Food({ id, imageUrl, price, nameOfDish, detailsOfDish }: FoodProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickOnAddToTicket = () => {
    const newId: IdState = {
      idObject: id as string | number,
    };
    dispatch(saveId(newId));
    setIsDisabled((current) => !current);
  };

  const handleClickOnCancelSelectedFood = () => {
    dispatch(clearId());
    setIsDisabled((current) => !current);
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
