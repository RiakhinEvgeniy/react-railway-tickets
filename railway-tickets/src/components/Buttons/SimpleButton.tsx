import { useNavigate } from "react-router-dom";
import "./SimpleButton.scss";

interface SimpleButtonProps {
  className: string;
  text: string;
  type?: 'submit' | 'button';
}

function SimpleButton(buttonProps: SimpleButtonProps) {
  const navigate = useNavigate();
  const { className, text, type = 'button' } = buttonProps;

const handleNavigate = () => {
  navigate("/payment");
}

  return (
    <div className="simple-btn">
      <button className={`simple-btn__${className}`} onClick={handleNavigate} type={type}>{text}</button>
    </div>
  );
}

export default SimpleButton;
