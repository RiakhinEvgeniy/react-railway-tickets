import { useNavigate } from 'react-router-dom';
import './SimpleButton.scss';

interface SimpleButtonProps {
  id: string;
  className: string;
  text: string;
  type?: 'submit' | 'button';
}

function SimpleButton(buttonProps: SimpleButtonProps) {
  const navigate = useNavigate();
  const { id, className, text, type = 'button' } = buttonProps;

  const handleNavigate = () => {
    if (id === 'review-booknow') {
      navigate('/payment');
    } else if (id === 'payment-booknow') {
      navigate('/success');
    } else if (['payment-cancel', 'review-cancel'].includes(id)) {
      navigate(-1);
    } else if (['success', 'success-cancel', 'no-tickets'].includes(id)) {
      navigate('/');
    }
  };

  return (
    <div className="simple-btn">
      <button
        id={id}
        className={`simple-btn__${className}`}
        onClick={handleNavigate}
        type={type}
      >
        {text}
      </button>
    </div>
  );
}
export default SimpleButton;
