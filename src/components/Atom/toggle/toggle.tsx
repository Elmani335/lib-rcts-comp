import React from "react";

interface ToggleSwitchProps {
  isOn: boolean; // État du toggle
  onToggle: (checked: boolean) => void; // Fonction pour gérer le changement d'état
  onColor?: string; // Couleur si activé
  offColor?: string; // Couleur si désactivé
  disabled?: boolean; // Si le switch est désactivé
  size?: "small" | "medium" | "large"; // Taille du switch
}

const Toggle: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  onColor = "green",
  offColor = "gray",
  disabled = false,
  size = "medium",
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onToggle(!isOn);
    }
  };

  const getSize = () => {
    switch (size) {
      case "small":
        return { width: "40px", height: "20px" };
      case "large":
        return { width: "80px", height: "40px" };
      default:
        return { width: "60px", height: "30px" };
    }
  };

  return (
    <div
      onClick={handleToggle}
      style={{
        width: getSize().width,
        height: getSize().height,
        backgroundColor: isOn ? onColor : offColor,
        borderRadius: "999px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: isOn ? "flex-end" : "flex-start",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: "white",
          borderRadius: "50%",
          transition: "transform 0.3s ease",
        }}
      />
    </div>
  );
};

export default Toggle;
