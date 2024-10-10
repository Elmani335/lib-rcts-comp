import React, { useState } from 'react';
import CustomTable from './components/table/table';
import RctsComptBtn from './components/button/button';
import Radio from './components/radio/radio';
import Loader from './components/loader/loader';
import './App.css';

const App: React.FC = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>('');

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value); // Met à jour l'état local avec la valeur sélectionnée
  };

  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className={`grid-item ${index === 12 ? 'grid-item-large' : ''}`} key={index}>
          {index === 0 && (
            <RctsComptBtn text="Click Me!" primary size="medium" />
          )}
          {index === 13 && (
            <div>
              {/* Utilisation avec les valeurs par défaut */}
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
            <div style={{ padding: '20px' }}>
              <Radio
                options={['Voiture', 'Bateau', 'Avion']}
                name="radio"
                onChange={handleRadioChange}
              />
            </div>
          )}
          {index === 12 && (
            <CustomTable
              rows={4}
              columns={4}
              columnNames={['Nom', 'Age', 'Pays', 'métier']}
              rowNames={['1', '2', '3', '4']}
              data={{
                '0-0': { content: 'Pierre', color: '#000', backgroundColor: '#f8f9fa' },
                '0-1': { content: '24', color: '#000' },
                '0-2': { content: 'France', color: '#000' },
                '0-3': { content: 'dév', color: '#000' },
              }}
              borderColor="#ddd"
              borderWidth="2px"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;