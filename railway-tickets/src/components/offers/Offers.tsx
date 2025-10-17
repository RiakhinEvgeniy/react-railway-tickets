import sale from '../../assets/sale-img.png'
import "./Offers.scss";

interface OfferProps {
  firstSale: string;
  secondtSale: string;
}

// 50% off up to $100 | Use code BOOKNOW

function Offers({firstSale, secondtSale}: OfferProps) {
  return (
    <div className="offer">
      <h2 className="offer__title">Offers</h2>
      <div className="offer__sale">
        <div className="offer__sale__img-text">
          <img src={sale} alt="sale" style={{width: "25px", height: "25px"}}/>
          <span className="offer__sale__img-text__text">{firstSale}</span>
        </div>
        <span className="offer__sale__apply">Apply</span>
      </div>
      <div className="offer__sale">
        <div className="offer__sale__img-text">
          <img src={sale} alt="sale" style={{width: "25px", height: "25px"}}/>
          <span className="offer__sale__img-text__text">{secondtSale}</span>
        </div>
        <span className="offer__sale__apply">Apply</span>
      </div>
    </div>
  );
}

export default Offers;
