// components/input/input.tsx
import React, { ChangeEventHandler } from "react";
import "./input.css";

export type InputProps = {
  autoFocus?: boolean;
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search"  | "submit" | "tel" | "text" | "time" | "url" | "week";
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  maxLength?: number; 
  min?: string | number; 
  max?: string | number; 
  multiple?: boolean;
  pattern?: string;
  title?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const RctsComptInput: React.FC<InputProps> = ({
  autoFocus,
  type,
  placeholder,
  readOnly,
  required,
  maxLength,
  min,
  max,
  multiple,
  size,
  pattern,
  title,
  disabled,
  value,
  onChange
}) => {
  return (
    <div>
      <input
        className={`input ${size}`}
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        min={type === "number" || type === "date" ? min : undefined}
        max={type === "number" || type === "date" ? max : undefined} 
        multiple={multiple}
        pattern={pattern}
        title={title}
      />
    </div>
  );
};

export default RctsComptInput;
