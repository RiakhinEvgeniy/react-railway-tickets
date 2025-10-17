import spirit from '../../assets/spirit.png'
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__wrapper">
        <div className="notfound__wrapper__spirit">
          <span className="notfound__wrapper__spirit__four">4</span>
          <img src={spirit} alt="spirit" />
          <span className="notfound__wrapper__spirit__four">4</span>
        </div>
        <h1 className="notfound__wrapper__page-missing">Boo! Page Missing!</h1>
        <h2 className="notfound__wrapper__text">Whoops! This page must be a ghost - it's not here!</h2>
        <button className="notfound__wrapper__btn">Find shelter</button>
      </div>
    </div>
  );
}

export default NotFound;
