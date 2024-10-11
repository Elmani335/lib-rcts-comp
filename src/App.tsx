import React, { useState } from "react";
import RctsComptBtn from "./components/Atom/button/button";
import Radio from "./components/Atom/radio/radio";
import Checkbox from "./components/Atom/checkbox/checkbox";
import Alert from "./components/Molecule/alert/alert";
import Loader from "./components/Atom/loader/loader";
import Toggle from "./components/Atom/toggle/toggle";
import Card from "./components/Molecule/card/card";
import Breadcrumb from "./components/Molecule/breadcrumb/breadcrumb";
import RctsComptSelect from "./components/Atom/select/select";
import RctsComptInput from "./components/Atom/input/input";
import Tabs from "./components/tabs/tabs";
import CustomTable from "./components/table/table";
import Carousel from "./components/carousel/carousel";

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
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(
    null
  );

  const showAlert = (type: string, message: string) => {
    setAlert({ type, message });
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  return (
    <div className="grid-container">
      {[...Array(20)].map((_, index) => (
        <div
          className={`grid-item ${
            index === 3 || index === 7 || index === 8 || index === 9
              ? "grid-item-large"
              : ""
          }`}
          key={index}
        >
          {index === 0 && (
            <RctsComptBtn text="Click Me!" size="medium" />
          )}
          {index === 1 && (
            <RctsComptInput
              type="text"
              withLabel={true}
              text="test"
              display="side-by-side-right"
              fontSize="fontSizeLarge"
              id="id"
              name="name"
              autoFocus
              required
              size="large"
            />
          )}
          {index === 2 && (
            <RctsComptSelect
              id="exampleSelect"
              name="example"
              data={[
                {
                  group: "Renault",
                  options: [
                    { value: "clio2", label: "Clio 2" },
                    { value: "Megane3", label: "Megane 3" },
                  ],
                },
                {
                  group: "Peugeot",
                  options: [
                    { value: "206", label: "206" },
                    { value: "5008", label: "5008" },
                  ],
                },
                { value: "Autre", label: "autre" },
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
              <button
                className="button"
                onClick={() => showAlert("danger", "Succès !")}
              >
                Montrer l'alerte
              </button>
              {alert && (
                <Alert
                  type={"danger"}
                  message={alert.message}
                  buttonText="Fermer"
                  onClose={() => setAlert(null)}
                  autoClose={false}
                  size="small"
                />
              )}
            </div>
          )}
          {index === 4 && (
            <div style={{ padding: "20px" }}>
              <Checkbox
                name="exampleCheckbox"
                text="La Centrale"
                data={[
                  {
                    group: "Moteur",
                    options: [
                      { value: "1.4", label: "1.4" },
                      { value: "1.2", label: "1.2" },
                      { value: "1.9", label: "1.9" },
                    ],
                  },
                  {
                    group: "Generation",
                    options: [
                      { value: "RS", label: "RS" },
                      { value: "Coupe", label: "Coupe" },
                      { value: "Societe", label: "Societe" },
                    ],
                  },
                  {
                    group: "Carburant",
                    options: [
                      { value: "Essence", label: "Essence" },
                      { value: "Diesel", label: "Diesel" },
                      { value: "Electrique", label: "Electrique" },
                    ],
                  },
                  { value: "1erMain", label: "1er Main" },
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
          {index === 5 && (
            <Tabs
              tabs={[
                { label: "Tab 1", content: <div>Content for Tab 1</div> },
                { label: "Tab 2", content: <div>Content for Tab 2</div> },
                { label: "Tab 3", content: <div>Content for Tab 3</div> },
              ]}
            />
          )}
          {index === 6 && (
            <CustomTable
              rows={4}
              columns={4}
              columnNames={["Name", "Age", "Country", "Occupation"]}
              rowNames={["1", "2", "3", "4"]}
              data={{
                "0-0": {
                  content: "Alice",
                  color: "#000",
                  backgroundColor: "#f8f9fa",
                },
                "0-1": { content: "24", color: "#000" },
                "0-2": { content: "France", color: "#000" },
                "0-3": { content: "Engineer", color: "#000" },
              }}
              borderColor="#ddd"
              borderWidth="2px"
              enableSorting={true}
              enablePagination={true}
              rowsPerPage={2}
              enableSelection={true}
            />
          )}
          {index === 7 && (
            <div>
              <Breadcrumb items={breadcrumbItems} separator=">" />
              <h1>Laptops</h1>
            </div>
          )}
          {index === 8 && (
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
        </div>
      ))}
    </div>
  );
};

export default App;
