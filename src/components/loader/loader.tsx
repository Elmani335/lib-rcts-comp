import React from "react";
import "./Loader.css";

const Loader = ({
  size = 40,
  color = "#3498db",
  speed = 1,
  text = "Chargement...",
}) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${size / 8}px solid #f3f3f3`,
    borderTop: `${size / 8}px solid ${color}`,
    animation: `spin ${speed}s linear infinite`,
  };

  return (
    <div className="loader-container">
      <div className="spinner" style={spinnerStyle}></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;
