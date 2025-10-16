import "./Food.scss";

function Food() {
  return (
    <div className="food">
      <div className="food__image"></div>
      <div className="food__info">
        <div className="food__info__title">
          <span>Paneer Tikka Rice</span>
          <span>Bowl - Mini</span>
        </div>
        <span>$200.00</span>
        <button className="food__btn" type="button">
          Add to Ticket
        </button>
      </div>
    </div>
  );
}

export default Food;
