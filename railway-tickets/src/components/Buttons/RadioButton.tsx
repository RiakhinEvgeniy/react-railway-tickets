// RadioButton.tsx
import React from "react";
import "./RadioButton.scss";
import { useLocation } from "react-router-dom";

// 1. Определяем интерфейс для пропсов компонента
interface RadioButtonProps {
  name: string; // name атрибут для группировки радио кнопок
  value: string; // значение конкретной радио кнопки
  checked: boolean; // выбрана ли эта кнопка
  onChange: (value: string) => void; // функция обратного вызова при изменении
  children?: React.ReactNode; // текст или элементы внутри label
  className?: string; // дополнительные CSS классы (опционально)
  disabled?: boolean; // заблокирована ли кнопка (опционально)
}

// 2. Создаем функциональный компонент как обычную функцию
function RadioButton({
  name,
  value,
  checked,
  onChange,
  children,
  className = "",
  disabled = false,
}: RadioButtonProps) {
  const location = useLocation();
  const homePage = location.pathname === "/";

  const radionButtonStyle = {
    color: homePage ? "white" : "black",
  };

  // 3. Обработчик клика - вызывает onChange с нужным значением
  function handleChange() {
    if (!disabled) {
      onChange(value);
    }
  }

  return (
    <label
      className={`radio-button ${className} ${
        disabled ? "radio-button--disabled" : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="radio-button__input"
      />
      <span className="radio-button__label" style={radionButtonStyle}>
        {children}
      </span>
    </label>
  );
}

export default RadioButton;
