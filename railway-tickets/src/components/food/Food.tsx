import './Food.scss';

interface FoodProps {
  imageUrl: string;
  price: number;
  nameOfDish: string;
  detailsOfDish: string;
}

function Food({ imageUrl, price, nameOfDish, detailsOfDish }: FoodProps) {
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
        <button className="food__btn" type="button">
          Add to Ticket
        </button>
      </div>
    </div>
  );
}

export default Food;
