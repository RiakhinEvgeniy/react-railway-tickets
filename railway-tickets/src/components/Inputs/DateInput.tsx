// DateInput.tsx
import React from "react";
import "./DateInput.scss";
import { useLocation } from "react-router-dom";

// 1. Определяем интерфейс для пропсов
interface DateInputProps {
  label: string; // текст лейбла
  value: string; // текущее значение (YYYY-MM-DD)
  onChange: (value: string) => void; // функция изменения значения
  name?: string; // name атрибут
  className?: string; // дополнительные CSS классы
  disabled?: boolean; // заблокирован ли input
  required?: boolean; // обязательное ли поле
  min?: string; // минимальная дата (YYYY-MM-DD)
  max?: string; // максимальная дата (YYYY-MM-DD)
  isReturnDate?: boolean; // специальный стиль для обратной даты
}

function getMinFormatDate() {
  return new Date().toLocaleDateString("en-CA");
}

function getMaxFormatDate() {
  const currentDate = new Date();
  const nextMonthDate = new Date(currentDate);

  return new Date(
    nextMonthDate.setMonth(currentDate.getMonth() + 1)
  ).toLocaleDateString("en-CA");
}

// 2. Создаем функциональный компонент
function DateInput({
  label,
  value,
  onChange,
  name,
  className = "",
  disabled = false,
  required = false,
  min = getMinFormatDate(),
  max = getMaxFormatDate(),
  isReturnDate = false,
}: DateInputProps) {
  const location = useLocation();
  const homePage = location.pathname === "/";
  
    const dateInputStyle = {
      color: homePage ? "white" : "black",
    };

  // 3. Обработчик изменения значения
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  // 4. Генерируем уникальный id для связи label и input
  const inputId = `date-input-${
    name || label.toLowerCase().replace(/\s+/g, "-")
  }`;

  return (
    <div
      className={`date-input ${className} ${
        isReturnDate ? "date-input--return" : ""
      }`}
    >
      <label
        htmlFor={inputId}
        style={dateInputStyle}
        className="date-input__label"
      >
        {label}
        {/* {required && <span className="date-input__required">*</span>} */}
      </label>

      <input
        id={inputId}
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        className="date-input__field"
      />
    </div>
  );
}

export default DateInput;
