import React, { useEffect, useState } from "react";
import "./alert.css";

export type AlertProps = {
  type: "success" | "danger" | "info";
  message: string;
  buttonText?: string;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number; 
  size?: "small" | "medium" | "large";
};

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  buttonText = "Close", // Valeur par défaut
  onClose,
  autoClose = true,
  duration = 3000,
  size,
}) => {
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
    <div className={`alert alert-${type} ${size}`}>
      <span>{message}</span>
      <button className="button" onClick={() => {
        setVisible(false);
        onClose && onClose();
      }}>
        {buttonText}
      </button>
    </div>
  );
};

export default Alert;
