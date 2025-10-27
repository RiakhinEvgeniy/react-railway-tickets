// TextInput.tsx
import React from "react";
import "./TextInput.scss";
import { useLocation } from "react-router-dom";

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
  type?: "text" | "email" | "tel"; // тип input
}

// 2. Создаем функциональный компонент
function TextInput({
  label,
  value,
  onChange,
  placeholder = "",
  name,
  className = "",
  disabled = false,
  required = false,
  type = "text",
}: TextInputProps) {
  const location = useLocation();
  const homePage = location.pathname === "/";

  const textInputStyle = {
      color: homePage ? "white" : "black",
    };

  // 3. Обработчик изменения значения
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {    
    onChange(e.target.value);
  }

  // 4. Генерируем уникальный id для связи label и input
  const inputId = `input-${name || label.toLowerCase().replace(/\s+/g, "-")}`;

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
    </div>
  );
}

export default TextInput;
