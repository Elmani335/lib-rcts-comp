# Documentation Composants

### Select

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

### Input

  autoFocus?: boolean;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  value?: string;
  placeholder?: string;
  backgroundColor?: string;
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