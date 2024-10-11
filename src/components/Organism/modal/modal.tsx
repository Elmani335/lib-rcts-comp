import React, { useState, useEffect } from 'react';
import './modal.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content: React.ReactNode;
  overlayColor?: string;
  modalBackgroundColor?: string;
  modalWidth?: string;
  modalHeight?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  boxShadow?: string;
  fontFamily?: string;
  fontSize?: string;
  closeButtonColor?: string;
  closeButtonHoverColor?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
  animationDuration?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  modalBackgroundColor = '#fff',
  modalWidth = '500px',
  modalHeight = 'auto',
  borderRadius = '10px',
  borderColor = '#ddd',
  borderWidth = '1px',
  boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)',
  fontFamily = 'Arial, sans-serif',
  fontSize = '16px',
  closeButtonColor = '#333',
  closeButtonHoverColor = '#000',
  fadeIn = true,
  fadeOut = true,
  animationDuration = '0.5s',
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else if (fadeOut) {
      setTimeout(() => setVisible(false), parseFloat(animationDuration) * 1000);
    } else {
      setVisible(false);
    }
  }, [isOpen, fadeOut, animationDuration]);

  if (!visible) return null;

  return (
    <div
      className={`modal-overlay ${fadeIn && isOpen ? 'fade-in' : ''} ${fadeOut && !isOpen ? 'fade-out' : ''}`}
      style={{ backgroundColor: overlayColor, animationDuration }}
    >
      <div
        className="modal-container"
        style={{
          backgroundColor: modalBackgroundColor,
          width: modalWidth,
          height: modalHeight,
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: borderWidth,
          boxShadow: boxShadow,
          fontFamily: fontFamily,
          fontSize: fontSize,
        }}
      >
        <div className="modal-header">
          {title && <h2>{title}</h2>}
          <button
            className="close-button"
            onClick={onClose}
            style={{ color: closeButtonColor }}
          >
            &times;
          </button>
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;