import React from "react";

interface CardProps {
  title?: string; // Titre de la carte (facultatif)
  description?: string; // Description de la carte (facultatif)
  imageUrl?: string; // URL de l'image (facultatif)
  imageAlt?: string; // Texte alternatif pour l'image (facultatif)
  children?: React.ReactNode; // Contenu personnalisé inséré dans la carte
  actions?: React.ReactNode; // Boutons ou autres éléments interactifs
  onClick?: () => void; // Fonction appelée lors du clic sur la carte
  style?: React.CSSProperties; // Style personnalisé pour la carte
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  children,
  actions,
  onClick,
  style = {},
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || "Card Image"}
          style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }}
        />
      )}
      {title && (
        <h2 style={{ fontSize: "1.5em", margin: "12px 0" }}>{title}</h2>
      )}
      {description && <p style={{ color: "#555" }}>{description}</p>}
      {children}
      {actions && <div style={{ marginTop: "16px" }}>{actions}</div>}
    </div>
  );
};

export default Card;
