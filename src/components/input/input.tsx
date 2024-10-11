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
  id?: string;
  name?: string;

  //Pour Label
  withLabel?: boolean;
  text?: string;
  display?: "above" | "side-by-side-left" | "below" | "side-by-side-right";
  fontSize?: "fontSizeSmall" | "fontSizeMedium" | "fontSizeLarge";
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
  id,
  name,

  withLabel,
  text,
  display,
  fontSize,
  onChange
}) => {
  return (
    <div className={display}>
      <label 
      className={`label-${withLabel} ${fontSize} `}
      >
        {text}
      </label>

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
        id={id}
        name={name}
      />
    </div>
  );
};

export default RctsComptInput;
