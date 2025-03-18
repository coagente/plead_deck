export interface SlideContent {
  id?: string | number;
  title?: string;
  content: string | string[];
  notes?: string;
  background?: {
    color?: string;
    image?: string;
    video?: string;
  };
}

export interface PresentationContent {
  title: string;
  author: string;
  description: string;
  date: string;
  slides: SlideContent[];
}

export interface SlideBackground {
  color?: string;
}

export interface Slide {
  id: string;
  content: string | string[];
  background?: SlideBackground;
}

export interface PresentationTheme {
  // Colores
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  
  // Tipografía
  bodyFont: string;
  bodySize: string;
  
  // Opcional: más propiedades de tema si las necesitas
  headingFont?: string;
  headingSize?: string;
}

export interface PresentationConfig {
  theme: PresentationTheme;
  styles: typeof import('../config/presentation.config').slideStyles;
}

// Tipos de layout para slides
export type SlideLayout = 'default' | 'title' | 'image' | 'video' | 'split' | 'code' | 'quote' | 'comparison';

// Estructura para un slide
export interface PresentationSlide {
  id: string;
  title?: string;
  content: string | string[];
  notes?: string;
  background?: {
    color?: string;
    image?: string;
  };
}

// Tipos para las props del SlideRenderer
export interface SlideRendererProps {
  slide: SlideContent;
  theme: PresentationTheme;
  isThumbnail?: boolean;
} 