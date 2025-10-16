import "./BillingInputs.scss";

interface BillingInputsProps {
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

function BillingInputs({
  label,
  value,
  onChange,
  placeholder = "",
  name,
  className = "",
  disabled = false,
  required = false,
  type,
}: BillingInputsProps) {
  // 3. Обработчик изменения значения
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  // 4. Генерируем уникальный id для связи label и input
  const inputId = `billing-${name || label.toLowerCase().replace(/\s+/g, "-")}`;

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
        disabled={disabled}
        required={required}
        className="billing-input__field"
      />
    </div>
  );
}

export default BillingInputs;
