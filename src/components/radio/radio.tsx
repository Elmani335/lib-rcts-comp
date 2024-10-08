// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 2px solid transparent;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
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

  &:hover {
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

const RctsComptBtn: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default RctsComptBtn;
