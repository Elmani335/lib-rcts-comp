import React from "react";
import RctsComptBtn from "./components/button/button";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className="grid-item" key={index}>
          {index === 0 && (
            <RctsComptBtn text="Click Me!" primary size="medium" />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
