import React, { createContext, useContext, useState } from 'react';
import { baseTheme } from '../config/presentation.config';
import { defaultPresentation } from '../config/presentation.content';
import { PresentationTheme, Slide } from '../types/presentation';

interface PresentationContextType {
  theme: PresentationTheme;
  setTheme: (theme: PresentationTheme) => void;
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<PresentationTheme>(baseTheme);
  const [slides, setSlides] = useState<Slide[]>(defaultPresentation.slides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <PresentationContext.Provider 
      value={{
        theme,
        setTheme,
        slides,
        setSlides,
        currentSlideIndex,
        setCurrentSlideIndex
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentationContext = () => {
  const context = useContext(PresentationContext);
  if (context === undefined) {
    throw new Error('usePresentationContext must be used within a PresentationProvider');
  }
  return context;
}; 