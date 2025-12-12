import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import {
  updatePassengerField,
  type PassengerInfo,
} from '../../redux/passengerSlice';
import './BillingInputs.scss';
import { useValidateBirthDate } from '../../hooks/useValidateBirthDate';

interface BillingInputsProps {
  label: string; // текст лейбла
  value: string; // текущее значение
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

  const validateBirthDate = useValidateBirthDate();

  // Обработчик изменения значения
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updatePassengerField({ field: name, value: e.target.value }));
    validateBirthDate(e.target.value);
  }

  // Генерируем уникальный id для связи label и input
  const randomNum = Math.floor(Math.random() * 100000);
  const inputId = `${+randomNum}-${
    name || label.toLowerCase().replace(/\s+/g, '-')
  }`;

  let maxAmountCharsInBirthdate: number = 30;
  if (placeholder === 'DD.MM.YYYY') {
    maxAmountCharsInBirthdate = 10;
  }

  return (
    <div className={`billing-input ${className}`}>
      <label htmlFor={inputId} className="billing-input__label">
        {label}
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
        maxLength={maxAmountCharsInBirthdate}
      />
    </div>
  );
}

export default BillingInputs;
