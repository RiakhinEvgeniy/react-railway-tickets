import "./SimpleButton.scss";

interface SimpleButtonProps {
  className: string;
  text: string;
}

function SimpleButton(buttonProps: SimpleButtonProps) {
  const { className, text } = buttonProps;
  return (
    <div className="simple-btn">
      <button className={`simple-btn__${className}`}>{text}</button>
    </div>
  );
}

export default SimpleButton;
