import "./Header.scss";
import train_white from "../../assets/railtrain_logo_white.png";
import train_black from "../../assets/railtrain_logo.png";
import { useTheme } from "../../context/ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { theme } = useTheme();
  const location = useLocation();
  const homePage = location.pathname === "/";
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: homePage ? "black" : "rgb(240, 240, 240)",
    color: homePage ? "white" : "black",
  };

  const srcImg = homePage ? train_white : train_black;

  const navigateToHomePage = () => {
    navigate("/");
  }

  return (
    <div className="header" style={headerStyle}>
      <div className="header__logo" onClick={navigateToHomePage}>
        <img
          className={`header__train header__train-${theme}`}
          src={srcImg}
          alt="train"
        />
      </div>
      <div></div>
      <div className="header__info">
        <span>Mobile App</span>
        <span>FAQs</span>
        <span>Contact</span>
        <span className="header__info__sign-up">Sign Up</span>
      </div>
    </div>
  );
}

export default Header;
