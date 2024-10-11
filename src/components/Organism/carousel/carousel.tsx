import React, { useState, useEffect } from 'react';
import './carousel.css';

type CarouselProps = {
  slides: Array<{ content?: React.ReactNode; backgroundUrl?: string; gradientMask?: string; }>;
  backgroundColor?: string;
  gradientBackground?: string;
  navigationButtons?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  borderRadius?: string;
  boxShadow?: string;
  arrowColor?: string;
  paginationColor?: string;
  slideAnimationDuration?: string;
  slideDirection?: 'left' | 'right';
  enableSlidingAnimation?: boolean;
};

const Carousel: React.FC<CarouselProps> = ({
  slides,
  backgroundColor = '#fff',
  gradientBackground,
  navigationButtons = true,
  autoplay = false,
  autoplayInterval = 3000,
  borderRadius = '10px',
  boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)',
  arrowColor = '#333',
  paginationColor = '#333',
  slideAnimationDuration = '0.5s',
  slideDirection = 'right',
  enableSlidingAnimation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (autoplay && !isSliding) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, currentIndex, isSliding]);

  const handleNextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, parseFloat(slideAnimationDuration) * 1000);
      return () => clearTimeout(timer);
    }
  }, [isSliding, slideAnimationDuration]);

  return (
    <div
      className="carousel-container"
      style={{
        background: gradientBackground || backgroundColor,
        borderRadius,
        boxShadow,
      }}
    >
      <div
        className="carousel-slide-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: enableSlidingAnimation ? `transform ${slideAnimationDuration} ease-in-out` : 'none',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{
              backgroundImage: slide.backgroundUrl ? `url(${slide.backgroundUrl})` : 'none',
            }}
          >
            {slide.gradientMask && (
              <div className="gradient-mask" style={{ background: slide.gradientMask }}></div>
            )}
            {slide.content && (
              <div className="carousel-content">{slide.content}</div>
            )}
          </div>
        ))}
      </div>

      {navigationButtons && (
        <>
          <button className="carousel-arrow left" style={{ color: arrowColor }} onClick={handlePrevSlide}>
            &#8249;
          </button>
          <button className="carousel-arrow right" style={{ color: arrowColor }} onClick={handleNextSlide}>
            &#8250;
          </button>
        </>
      )}

      <div className="carousel-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            style={{ backgroundColor: paginationColor }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;