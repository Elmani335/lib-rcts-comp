import React from "react";

interface BreadcrumbItem {
  label: string; // Label affiché pour cet élément
  href?: string; // URL du lien (facultatif si c'est un dernier élément ou texte statique)
  onClick?: () => void; // Fonction appelée lors du clic (optionnel)
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]; // Tableau des éléments de la breadcrumb
  separator?: string; // Séparateur entre les éléments (par défaut "/")
  className?: string; // Classe CSS pour styliser la breadcrumb
  style?: React.CSSProperties; // Styles en ligne personnalisés
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  className = "",
  style = {},
}) => {
  return (
    <nav className={className} style={style}>
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;

        return (
          <span key={index}>
            {item.href && !isLastItem ? (
              <a
                href={item.href}
                onClick={item.onClick}
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                {item.label}
              </a>
            ) : (
              <span style={{ color: isLastItem ? "#555" : "#007bff" }}>
                {item.label}
              </span>
            )}
            {!isLastItem && (
              <span style={{ margin: "0 8px" }}>{separator}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
