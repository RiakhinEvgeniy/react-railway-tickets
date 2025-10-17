import "./Food.scss";

interface FoodProps {
  imageUrl: string;
  price: string;
  menu1: string;
  menu2: string;
}

function Food({imageUrl, price, menu1, menu2}: FoodProps) {
  
  return (
    <div className="food">
      <div className="food__image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="food__info">
        <div className="food__info__title">
          <span>{menu1}</span>
          <span>{menu2}</span>
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
