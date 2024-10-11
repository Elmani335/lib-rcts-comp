import React, { useEffect, useState } from "react";
import "./alert.css";

export type AlertProps = {
  type: "success" | "danger" | "info";
  message: string;
  buttonText?: string;
  onClose?: () => void;
  autoClose?: boolean;
  backgroundColor?: string;
  duration?: number;
  size?: "small" | "medium" | "large";
};

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  buttonText = "Fermer",
  onClose,
  autoClose = true,
  duration = 3000,
  backgroundColor,
  size,
}) => {
  const alertStyle = {
    backgroundColor,
  };

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`alert alert-${type} ${size}`} style={alertStyle}>
      <span>{message}</span>
      <button
        className="button"
        onClick={() => {
          setVisible(false);
          onClose && onClose();
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Alert;
