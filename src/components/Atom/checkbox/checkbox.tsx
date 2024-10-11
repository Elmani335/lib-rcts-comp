// components/checkbox/Checkbox.tsx
import React, { ChangeEventHandler } from "react";
import "./checkbox.css";

export type Option = {
  value: string;
  label: string;
};

export type GroupedOptions = {
  group: string;
  options: Option[];
};

export type CheckboxProps = {
  name: string;
  data: (GroupedOptions | Option)[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  required?: boolean;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
  text?: string;
  value?: string[]; // Valeur actuelle (tableau de valeurs sélectionnées)
  display?: "vertical" | "horizontal";
  withLabel?: boolean;
  fontSize?: "fontSizeSmall" | "fontSizeMedium" | "fontSizeLarge";
  border?: boolean;
  size?: "small" | "medium" | "large";
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  data,
  text,
  onChange,
  disabled,
  required,
  backgroundColor,
  color,
  borderRadius,
  display = "vertical",
  fontSize,
  border,
  size,
}) => {
  const checkboxStyle = {
    backgroundColor,
    borderRadius,
    color,
  };
  return (
    <div className={`checkbox-container ${display} border-${border} ${size}`}>
      <label>{text}</label>
      {data.map((item, index) => {
        if ("group" in item) {
          return (
            <fieldset key={index} style={checkboxStyle}>
              <legend>{item.group}</legend>
              {item.options.map((option, optIndex) => (
                <div key={optIndex} className={`checkbox ${fontSize}`}>
                  <label>
                    <input
                      type="checkbox"
                      name={name}
                      value={option.value}
                      onChange={onChange}
                      disabled={disabled}
                      required={required}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </fieldset>
          );
        } else {
          return (
            <div key={index} className={`checkbox ${fontSize}`}>
              <label>
                <input
                  style={checkboxStyle}
                  type="checkbox"
                  name={name}
                  value={item.value}
                  onChange={onChange}
                  disabled={disabled}
                  required={required}
                />
                {item.label}
              </label>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Checkbox;
