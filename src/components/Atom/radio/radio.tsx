import React, { useState } from "react";
import "./radioStyle.css";
interface RadioButtonProps {
  options: string[]; // Liste des options à afficher
  name: string; // Nom pour grouper les boutons radio
  onChange: (value: string) => void; // Fonction de callback appelée lors du changement de sélection
  color?: string; // Couleur du label par défaut (si non fourni, utilisation de la couleur du parent)
}

const Radio: React.FC<RadioButtonProps> = ({
  options,
  color,
  name,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Gérer la sélection d'une option
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value); // Appelle la fonction parent si nécessaire
  };

  return (
    <div>
      {options.map((option) => (
        <label
          key={option}
          style={{
            display: "flex",
            alignItems: "center",
            color,
            fontWeight: selectedOption === option ? "bold" : "normal",
            fontFamily: "sans-serif",
          }}
        >
          <input
            style={{
              color,
            }}
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Radio;
