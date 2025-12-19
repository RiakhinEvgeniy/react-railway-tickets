import './Button.scss';

interface ButtonProps {
  id: string;
  type: 'submit' | 'button';
  text: string;
  className: string;
  onClick?: () => void;
}

function Button({ id, type = 'button', text, className, onClick }: ButtonProps) {
  return (
    <button id={id} type={type} className={`btn__${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
