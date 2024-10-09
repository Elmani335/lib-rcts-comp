// components/input/input.tsx
import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

export type InputProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const StyledInput = styled.input<InputProps>`
  border: 2px solid transparent;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? "#6a0dad" : "#e0c3fc")};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  transition: background-color 0.3s, border-color 0.3s;

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.primary ? "#5a0ba5" : "#d3a7fc")};
  }

  &:focus {
    outline: none;
    border-color: #7d4dbd;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

const RctsComptInput: React.FC<InputProps> = ({
  size,
  primary,
  disabled,
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledInput
      type="text" 
      onChange={onChange} 
      value={value} 
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    />
  );
};

export default RctsComptInput;
