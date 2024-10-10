import React, { useState } from "react";
import RctsComptBtn from "./components/button/button";
import Radio from "./components/radio/radio";
import Loader from "./components/loader/loader";
import Toggle from "./components/toggle/toggle";
import Checkbox from "./components/checkbox/checkbox";

import "./App.css";

const App: React.FC = () => {
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
          {index === 11 && (
            /* Personnalisation des props */
            <div style={{ padding: "20px" }}>
                <Checkbox
                name="exampleCheckbox"
                text="La Centrale"
                data={[
                    { group: "Moteur", options: [{ value: "1.4", label: "1.4" }, { value: "1.2", label: "1.2" }, { value: "1.9", label: "1.9" }] },
                    { group: "Generation", options: [{ value: "RS", label: "RS" }, { value: "Coupe", label: "Coupe" }, { value: "Societe", label: "Societe" }] },
                    { group: "Carburant", options: [{ value: "Essence", label: "Essence" }, { value: "Diesel", label: "Diesel" }, { value: "Electrique", label: "Electrique" }] },
                    { value: "1erMain", label: "1er Main" } 
                ]}
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    console.log(selectedValue);
                }}
                value={["1.4", "Essence"]} 
                disabled={false}
                required={true}
                display="vertical"
                withLabel={true}
                fontSize="fontSizeMedium"
                border
                size="large"
                />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
