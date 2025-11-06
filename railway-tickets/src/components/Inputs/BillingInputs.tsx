import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import {
  updatePassengerField,
  type PassengerInfo,
} from '../../redux/passengerSlice';
import './BillingInputs.scss';

interface BillingInputsProps {
  label: string; // текст лейбла
  value: string; // текущее значение
  // onChange: (value: string) => void; // функция изменения значения
  placeholder?: string; // плейсхолдер (опционально)
  autocomplete?: string;
  name: keyof PassengerInfo; // name атрибут (опционально)
  className?: string; // дополнительные CSS классы
  disabled?: boolean; // заблокирован ли input
  required?: boolean; // обязательное ли поле
  type?: 'text' | 'email' | 'tel' | 'numeric'; // тип input
}

function BillingInputs({
  label,
  value,
  placeholder = '',
  autocomplete,
  name,
  className = '',
  disabled = false,
  required = false,
  type,
}: BillingInputsProps) {
  const dispatch = useDispatch<AppDispatch>();
  // Обработчик изменения значения
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updatePassengerField({ field: name, value: e.target.value }));
  }

  // Генерируем уникальный id для связи label и input
  const randomNum = Math.floor(Math.random() * 100000);
  const inputId = `${+randomNum}-${name || label.toLowerCase().replace(/\s+/g, '-')}`;  

  return (
    <div className={`billing-input ${className}`}>
      <label htmlFor={inputId} className="billing-input__label">
        {label}
        {/* {required && <span className="text-input__required">*</span>} */}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autocomplete}
        disabled={disabled}
        required={required}
        className="billing-input__field"
      />
    </div>
  );
}

export default BillingInputs;
