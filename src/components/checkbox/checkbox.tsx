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
  value?: string[]; // Valeur actuelle (tableau de valeurs sélectionnées)
  display?: "vertical" | "horizontal";
  withLabel?: boolean;
  fontSize?: "fontSizeSmall" | "fontSizeMedium" | "fontSizeLarge";
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  data,
  onChange,
  disabled,
  required,
  value = [],
  display = "vertical",
  withLabel,
  fontSize,
}) => {
  return (
    <div className={display}>
        <label></label>
      {data.map((item, index) => {
        if ("group" in item) {
          return (
            <fieldset key={index}>
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
                      checked={value.includes(option.value)} 
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
                  type="checkbox"
                  name={name}
                  value={item.value}
                  onChange={onChange}
                  disabled={disabled}
                  required={required}
                  checked={value.includes(item.value)} 
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
