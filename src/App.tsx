import React, { useState } from "react";
import RctsComptBtn from "./components/button/button";
import Radio from "./components/radio/radio";
import Loader from "./components/loader/loader";
import Toggle from "./components/toggle/toggle";

import "./App.css";

const App: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value); // Met à jour l'état local avec la valeur sélectionnée
  };

  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className="grid-item" key={index}>
          {index === 0 && (
            <RctsComptBtn text="Click Me!" primary size="medium" />
          )}
          {index === 12 && 
          <div>
          <h1>Composant Toggle</h1>
          <Toggle initialState={true} onToggle={handleToggleChange} />
          </div>}
          {index === 13 && (
            <div>
              {/* Utilisation avec les valeurs par défaut */}
              <Loader />

              {/* Personnalisation des props */}
              <Loader
                size={40}
                color="#e74c3c"
                speed={1}
                text="Veuillez patienter..."
              />
              <Loader
                size={40}
                color="#2ecc71"
                speed={2}
                text="Téléchargement en cours..."
              />
            </div>
          )}
          {index === 14 && (
            <div style={{ padding: "20px" }}>
              <Radio
                options={["Voiture", "Bateau", "Avion"]}
                name="radio"
                onChange={handleRadioChange}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
