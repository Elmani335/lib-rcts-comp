import React, { useState } from "react";
import RctsComptBtn from "./components/button/button";
import Radio from "./components/radio/radio";
import Loader from "./components/loader/loader";
import Toggle from "./components/toggle/toggle";
import Checkbox from "./components/checkbox/checkbox";
import Alert from "./components/alert/alert";
import RctsComptBtn from "./components/Atom/button/button";
import Radio from "./components/Atom/radio/radio";
import Loader from "./components/Atom/loader/loader";
import Toggle from "./components/Atom/toggle/toggle";
import Card from "./components/Molecule/card/card";
import Breadcrumb from "./components/Molecule/breadcrumb/breadcrumb";

import "./App.css";
import RctsComptSelect from "./components/select/select";
import RctsComptInput from "./components/input/input";

const App: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops" }, // Dernier élément sans lien (élément courant)
  ];

  const handleCardClick = () => {
    alert("Card clicked!");
  };

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
          {index === 1 && (      
            <RctsComptInput type="text" withLabel={true} text="test" display="side-by-side-right" fontSize="fontSizeLarge" id="id" name="name" autoFocus required size="large" />
          )}    
          {index === 2 && (
            <RctsComptSelect
                id="exampleSelect"
                name="example"
                data={[
                    { group: "Renault", options: [{ value: "clio2", label: "Clio 2" }, { value: "Megane3", label: "Megane 3" }] },
                    { group: "Peugeot", options: [{ value: "206", label: "206" }, { value: "5008", label: "5008" }] },
                    { value: "Autre", label: "autre" } 
                ]}
                withLabel={true}
                text="Select an option"
                size="small"
                display="above"
                multiple
                onChange={(e) => console.log(e.target.value)}
            />
          )}     
            {index === 3 && (
            <div>
              <button className="button" onClick={() => showAlert("danger", "Succès !")}>
                Montrer l'alerte
              </button>
              {alert && (
                <Alert
                  type={alert.type}
                  message={alert.message}
                  buttonText="Fermer" 
                  onClose={() => setAlert(null)}
                  autoClose={false}
                  size="small"
                />
              )}
            </div>
          )}   
          {index === 10 && (
            /* Personnalisation des props */
            <div>
              <Breadcrumb items={breadcrumbItems} separator=">" />
              <h1>Laptops</h1>
            </div>
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
