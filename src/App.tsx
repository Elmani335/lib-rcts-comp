import React, { useState, useEffect } from 'react';
import RctsComptBtn from './components/button/button';
import Radio from './components/radio/radio';
import Loader from './components/loader/loader';
import Toggle from './components/toggle/toggle';
import Carousel from './components/carousel/carousel';
import './App.css';

const App: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<string>('');

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value); // Met à jour l'état local avec la valeur sélectionnée
  };

  return (
    <div className="grid-container">
      {[...Array(15)].map((_, index) => (
        <div className={`grid-item ${index === 11 ? 'grid-item-large' : ''}`} key={index}>
          {index === 0 && (
            /* Personnalisation des props */
            <RctsComptBtn text="Click Me!" primary size="medium" />
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
            <div style={{ padding: '20px' }}>
              <Radio
                options={['Voiture', 'Bateau', 'Avion']}
                name="radio"
                onChange={handleRadioChange}
              />
            </div>
          )}
        </div>
      ))}

      <div className="carousel-container carousel-item-large">
        <Carousel
          slides={[
            {
              content: <div>Slide 1 Content</div>,
              backgroundUrl: 'https://via.placeholder.com/800x400/4a90e2/ffffff',
              gradientMask: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
            },
            {
              backgroundUrl: 'https://via.placeholder.com/800x400/e74c3c/ffffff',
            },
            {
              content: <div>Slide 3</div>,
              backgroundUrl: 'https://via.placeholder.com/800x400/2ecc71/ffffff',
              gradientMask: 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3))',
            },
          ]}
          backgroundColor="#f5f5f5"
          gradientBackground="linear-gradient(to right, #f0f0f0, #fafafa)"
          navigationButtons={true}
          autoplay={true}
          autoplayInterval={3000}
          borderRadius="15px"
          boxShadow="0 6px 15px rgba(0, 0, 0, 0.3)"
          arrowColor="#555"
          paginationColor="#000"
          slideAnimationDuration="1s"
          slideDirection="right"
          enableSlidingAnimation={true}
        />
      </div>
    </div>
  );
};

export default App;