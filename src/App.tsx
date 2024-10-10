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
              rows={10}
              columns={4}
              columnNames={['Name', 'Age', 'Country', 'Occupation']}
              rowNames={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
              data={{
                '0-0': { content: 'Alice', color: '#000', backgroundColor: '#f8f9fa' },
                '0-1': { content: '24', color: '#000' },
                '0-2': { content: 'France', color: '#000' },
                '0-3': { content: 'Engineer', color: '#000' },
                '1-0': { content: 'Bob', color: '#000', backgroundColor: '#f8f9fa' },
                '1-1': { content: '30', color: '#000' },
                '1-2': { content: 'USA', color: '#000' },
                '1-3': { content: 'Designer', color: '#000' },
                '2-0': { content: 'Charlie', color: '#000', backgroundColor: '#f8f9fa' },
                '2-1': { content: '28', color: '#000' },
                '2-2': { content: 'UK', color: '#000' },
                '2-3': { content: 'Developer', color: '#000' },
                '3-0': { content: 'Daisy', color: '#000', backgroundColor: '#f8f9fa' },
                '3-1': { content: '22', color: '#000' },
                '3-2': { content: 'Canada', color: '#000' },
                '3-3': { content: 'Analyst', color: '#000' },
                '4-0': { content: 'Eve', color: '#000', backgroundColor: '#f8f9fa' },
                '4-1': { content: '29', color: '#000' },
                '4-2': { content: 'Germany', color: '#000' },
                '4-3': { content: 'Scientist', color: '#000' },
                '5-0': { content: 'Frank', color: '#000', backgroundColor: '#f8f9fa' },
                '5-1': { content: '31', color: '#000' },
                '5-2': { content: 'Spain', color: '#000' },
                '5-3': { content: 'Teacher', color: '#000' },
              }}
              borderColor="#ddd"
              borderWidth="2px"
              enableSorting={true}
              enablePagination={true}
              rowsPerPage={3}
              enableSelection={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;