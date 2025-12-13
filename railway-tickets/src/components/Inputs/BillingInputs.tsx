import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import {
  setError,
  updatePassengerField,
  type PassengerInfo,
} from '../../redux/passengerSlice';
import './BillingInputs.scss';
import { useValidateBirthDate } from '../../hooks/useValidateBirthDate';
import { useCallback, useId } from 'react';

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
  const error = useSelector((state: RootState) => state.passengerData.error);
  console.log('Birthdate error:', error);

  // Обработчик изменения значения
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePassengerField({ field: name, value: e.currentTarget.value }));
    },
    [dispatch, name]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (name === 'dateOfBirth') {
        validateBirthDate(e.currentTarget.value);
      }
    },
    [name, validateBirthDate]
  );

  const handleFocus = useCallback(() => {
    if (name === 'dateOfBirth') {
      dispatch(setError(''));
    }
  }, [name, dispatch]);

  // Генерируем уникальный id для связи label и input
  // const randomNum = Math.floor(Math.random() * 100000);
  const randomNum = useId;
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
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        autoComplete={autocomplete}
        disabled={disabled}
        required={required}
        className="billing-input__field"
        maxLength={maxAmountCharsInBirthdate}
        aria-invalid={name === 'dateOfBirth' && !!error}
      />
      {name === 'dateOfBirth' && error && (
        <div className="billing-input__error" aria-live='polite'>
          {error}
        </div>
      )}
    </div>
  );
}

export default BillingInputs;
