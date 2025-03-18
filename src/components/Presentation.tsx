import React, { useState, useCallback } from 'react';
import SlideRenderer from './SlideRenderer';
import SlideThumbnailNavigator from './SlideThumbnailNavigator';
import { baseTheme } from '../config/presentation.config';
import { defaultPresentation } from '../config/presentation.content';
import { PresentationTheme, Slide } from '../types/presentation';

interface PresentationProps {
  slides?: Slide[];
  theme?: Partial<PresentationTheme>;
  initialSlide?: number;
}

const Presentation: React.FC<PresentationProps> = ({
  slides = defaultPresentation.slides,
  theme: customTheme,
  initialSlide = 0
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlide);
  const theme = { ...baseTheme, ...customTheme };

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  // Manejar eventos de teclado
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goToNextSlide, goToPrevSlide]);

  return (
    <div className="presentation-container">
      <SlideThumbnailNavigator
        slides={slides}
        currentSlideIndex={currentSlideIndex}
        onSlideSelect={setCurrentSlideIndex}
        theme={theme}
      />
      <div className="presentation-main">
        <div className="slide-container">
          <SlideRenderer
            slide={slides[currentSlideIndex]}
            theme={theme}
            isThumbnail={false}
          />
        </div>
        
        <div className="presentation-controls">
          <button 
            className="nav-button"
            onClick={goToPrevSlide}
            disabled={currentSlideIndex === 0}
          >
            ← Anterior
          </button>
          
          <div className="slide-number">
            {currentSlideIndex + 1} / {slides.length}
          </div>
          
          <button 
            className="nav-button"
            onClick={goToNextSlide}
            disabled={currentSlideIndex === slides.length - 1}
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation; 