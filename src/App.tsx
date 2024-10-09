import React from "react";
import RctsComptBtn from "./components/button/button";
import "./App.css";
import RctsComptInput from "./components/input/input";

const App: React.FC = () => {
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
        </div>
      ))}
    </div>
  );
};

export default App;
