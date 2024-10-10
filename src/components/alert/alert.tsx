import React, { useEffect, useState } from "react";
import "./alert.css";

export type AlertProps = {
  type: "success" | "danger" | "info";
  message: string;
  buttonText?: string; // Texte personnalisable pour le bouton
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number; // Durée avant la fermeture automatique
};

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  buttonText = "Close", // Valeur par défaut
  onClose,
  autoClose = true,
  duration = 3000,
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
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button onClick={() => {
        setVisible(false);
        onClose && onClose();
      }}>
        {buttonText}
      </button>
    </div>
  );
};

export default Alert;
