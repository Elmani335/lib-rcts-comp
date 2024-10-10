import React, { useState } from "react";
import RctsComptBtn from "./components/button/button";
import Radio from "./components/radio/radio";
import Loader from "./components/loader/loader";
import Toggle from "./components/toggle/toggle";
import Card from "./components/Molécule/card/card";

import "./App.css";

const App: React.FC = () => {
  const handleCardClick = () => {
    alert("Card clicked!");
  };

  const [isOn, setIsOn] = useState(false);

  const [selectedRadio, setSelectedRadio] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value); // Met à jour l'état local avec la valeur sélectionnée
  };

  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className="grid-item" key={index}>
          {index === 0 && (
            /* Personnalisation des props */
            <RctsComptBtn text="Click Me!" primary size="medium" />
          )}
          {index === 11 && (
            /* Personnalisation des props */
            <Card
              title="Beau couché de soleil"
              description="Doux couches de soleil en fait une belle pause"
              imageUrl="https://via.placeholder.com/300x200"
              imageAlt="Sunset"
              onClick={handleCardClick}
              actions={
                <button style={{ padding: "8px 16px" }}>en savoir plus</button>
              }
            />
          )}

          {index === 12 && (
            /* Personnalisation des props */
            <Toggle
              isOn={isOn}
              onToggle={setIsOn}
              onColor="green"
              offColor="red"
              size="small"
            />
          )}
          {index === 13 && (
            <div>
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
            /* Personnalisation des props */
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
