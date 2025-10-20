import { useNavigate } from "react-router-dom";
import "./SimpleButton.scss";

interface SimpleButtonProps {
  className: string;
  text: string;
}

function SimpleButton(buttonProps: SimpleButtonProps) {
  const navigate = useNavigate();
  const { className, text } = buttonProps;

const handleNavigate = () => {
  navigate("/payment");
}

  return (
    <div className="simple-btn">
      <button className={`simple-btn__${className}`} onClick={handleNavigate}>{text}</button>
    </div>
  );
}

export default SimpleButton;
