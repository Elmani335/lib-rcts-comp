import React, { useState } from "react";
import RctsComptBtn from "./components/Atom/button/button";
import Radio from "./components/Atom/radio/radio";
import Loader from "./components/Atom/loader/loader";
import Toggle from "./components/Atom/toggle/toggle";
import Card from "./components/Molecule/card/card";
import Breadcrumb from "./components/Molecule/breadcrumb/breadcrumb";

import "./App.css";

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
