import React, { useState } from "react";
import RctsComptBtn from "./components/button/button";
import Radio from "./components/radio/radio";
import Loader from "./components/loader/loader";
import Toggle from "./components/toggle/toggle";
import Alert from "./components/alert/alert";

import "./App.css";

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<string>("");
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
  
  const showAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className="grid-item" key={index}>
          {index === 0 && (
            <RctsComptBtn text="Click Me!" primary size="medium" />
          )}
          {index === 12 && (
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
              <Loader size={40} color="#e74c3c" speed={1} text="Veuillez patienter..." />
              <Loader size={40} color="#2ecc71" speed={2} text="Téléchargement en cours..." />
            </div>
          )}
          {index === 14 && (
            <div style={{ padding: "20px" }}>
              <Radio options={["Voiture", "Bateau", "Avion"]} name="radio" onChange={handleRadioChange} />
            </div>
          )}
          {index === 11 && (
            <div>
              <button onClick={() => showAlert("danger", "Succès !")}>
                Montrer l'alerte
              </button>
              {alert && (
                <Alert
                  type={alert.type}
                  message={alert.message}
                  buttonText="Fermer" 
                  onClose={() => setAlert(null)}
                  autoClose={false}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
