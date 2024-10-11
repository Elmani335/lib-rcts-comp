// components/select/select.tsx
import React, { ChangeEventHandler } from "react";
import "./select.css";

export type Option = {
  value: string;
  label: string;
};

export type GroupedOptions = {
  group: string;
  options: Option[];
};

export type SelectProps = {
  autoFocus?: boolean;
  required?: boolean;
  multiple?: boolean;
  backgroundColor?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  id?: string;
  name?: string;
  data?: (GroupedOptions | Option)[];
  withLabel?: boolean;
  text?: string;
  display?: "above" | "side-by-side-left" | "below" | "side-by-side-right";
  fontSize?: "fontSizeSmall" | "fontSizeMedium" | "fontSizeLarge";
};

const RctsComptSelect: React.FC<SelectProps> = ({
  autoFocus,
  required,
  multiple,
  size,
  disabled,
  id,
  name,
  backgroundColor,
  data,
  withLabel,
  text,
  display,
  fontSize,
  onChange,
}) => {
  const selectStyle = {
    backgroundColor,
  };
  return (
    <div className={display}>
      {withLabel && (
        <label className={`label-${withLabel} ${fontSize}`}>{text}</label>
      )}

      <select
        style={selectStyle}
        className={`select ${size}`}
        id={id}
        name={name}
        autoFocus={autoFocus}
        onChange={onChange}
        disabled={disabled}
        required={required}
        multiple={multiple}
      >
        {data &&
          data.map((item, index) => {
            if ("group" in item) {
              return (
                <optgroup label={item.group} key={index}>
                  {item.options.map((option, optIndex) => (
                    <option value={option.value} key={optIndex}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              );
            } else {
              return (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              );
            }
          })}
      </select>
    </div>
  );
};

export default RctsComptSelect;
