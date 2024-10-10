import React from "react";
import RctsComptBtn from "./components/button/button";
import "./App.css";
import RctsComptSelect from "./components/select/select";

const App: React.FC = () => {
  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className="grid-item" key={index}>
          {index === 0 && (
            <RctsComptBtn text="Click Me!" primary size="medium" />
          )}
          {index === 1 && (
            <RctsComptSelect
                id="exampleSelect"
                name="example"
                data={[
                    { group: "Renault", options: [{ value: "clio2", label: "Clio 2" }, { value: "Megane3", label: "Megane 3" }] },
                    { group: "Peugeot", options: [{ value: "206", label: "206" }, { value: "5008", label: "5008" }] },
                    { value: "Autre", label: "autre" } // Option simple
                ]}
                withLabel={true}
                text="Select an option"
                size="medium"
                onChange={(e) => console.log(e.target.value)}
            />
          )}        
        </div>
      ))}
    </div>
  );
};

export default App;
