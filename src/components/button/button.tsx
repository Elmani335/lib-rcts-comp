import React, { MouseEventHandler, useState } from "react";
import "./button.css";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "danger" | "icon";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  color?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  fontFamily?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  hoverColor?: string;
  backgroundColor?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  buttonType?: "button" | "submit" | "link";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const RctsComptBtn: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  disabled,
  size,
  loading,
  color,
  borderColor,
  borderWidth,
  borderRadius,
  fontFamily,
  width,
  height,
  boxShadow,
  hoverBoxShadow,
  hoverColor,
  backgroundColor,
  href,
  target,
  buttonType = "button",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    color,
    borderColor,
    borderWidth,
    borderRadius,
    fontFamily,
    width,
    height,
    boxShadow: isHovered ? hoverBoxShadow : boxShadow,
    backgroundColor: isHovered ? hoverColor : backgroundColor,
    transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s",
  };

  const buttonClass = `button ${variant} ${size}`;

  if (buttonType === "link" && href) {
    return (
      <a
        href={href}
        target={target}
        {...props}
        style={{ textDecoration: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={buttonClass}
          style={buttonStyle}
          disabled={disabled || loading}
        >
          {loading ? "Loading..." : text}
        </button>
      </a>
    );
  }

  return (
    <button
      type={buttonType === "submit" ? "submit" : "button"}
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default RctsComptBtn;
