import React, { useState } from 'react';

interface ToggleProps {
  initialState?: boolean; // Optionnel: état initial du toggle (activé ou désactivé)
  onToggle?: (state: boolean) => void; // Optionnel: fonction de rappel lors du changement d'état
}

const Toggle: React.FC<ToggleProps> = ({ initialState = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) {
      onToggle(newState); // Appel de la fonction de rappel avec le nouvel état
    }
  };

  return (
    <div 
      onClick={handleToggle}
      style={{
        display: 'inline-block',
        padding: '10px',
        background: isOn ? 'green' : 'red',
        color: 'white',
        borderRadius: '20px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      {isOn ? 'ON' : 'OFF'}
    </div>
  );
};

export default Toggle;
