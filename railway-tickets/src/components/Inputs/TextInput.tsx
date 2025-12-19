// TextInput.tsx
import React, { useEffect, useId, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import './TextInput.scss';
import { fetchCities } from '../../redux/citiesSlice';
import { selectAllCitiesArray } from '../../redux/selectors/citySelectors';

// 1. Определяем интерфейс для пропсов
interface TextInputProps {
  label: string; // текст лейбла
  value: string; // текущее значение
  onChange: (value: string) => void; // функция изменения значения
  placeholder?: string; // плейсхолдер (опционально)
  name?: string; // name атрибут (опционально)
  className?: string; // дополнительные CSS классы
  disabled?: boolean; // заблокирован ли input
  required?: boolean; // обязательное ли поле
  type?: 'text' | 'email' | 'tel'; // тип input
}

// 2. Создаем функциональный компонент
function TextInput({
  label,
  value,
  onChange,
  placeholder = '',
  name,
  className = '',
  disabled = false,
  required = false,
  type = 'text',
}: TextInputProps) {
  const location = useLocation();
  const homePage = location.pathname === '/';
  const [isClick, setIsClick] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const citiesData = useSelector(selectAllCitiesArray); //cityData из store.ts; cities из sitiesSlice
  const isLoading = useSelector((state: RootState) => state.cityData.isLoading);

  const textInputStyle = {
    color: homePage ? 'white' : 'black',
  };

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const sortedCities = citiesData.filter((city) => {
    const matchesCity = city.name.toLowerCase().includes(value.toLowerCase());
    return matchesCity;
  });

  // 3. Обработчик изменения значения
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
    setIsClick(true);
  }

  function handleCityClick(cityName: string) {
    onChange(cityName);
    setIsClick(false);
  }

  // 4. Генерируем уникальный id для связи label и input
  const inputId = useId();

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`text-input ${className}`}>
      <label
        htmlFor={inputId}
        style={textInputStyle}
        className="text-input__label"
      >
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
        disabled={disabled}
        required={required}
        className={`text-input__field text-input__field__${className}`}
      />

      {/* <div className="text-input__drop-down">
        {isClick &&
          value &&
          sortedCities.map((city) => (
            <span
              className="text-input__drop-down__cities"
              key={city.id}
              onClick={() => handleCityClick(city.name)}
            >
              {city.name}
            </span>
          ))}
      </div> */}

      {isClick && value && (
        <div className="text-input__drop-down">
          {sortedCities.map((city) => (
            <span
              className="text-input__drop-down__cities"
              key={city.id}
              onClick={() => handleCityClick(city.name)}
            >
              {city.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextInput;
