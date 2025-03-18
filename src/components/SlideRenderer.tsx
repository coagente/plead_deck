import React from 'react';
import { CSSProperties } from 'react';
import { slideStyles } from '../config/presentation.config';

// Definir y exportar las interfaces necesarias
export interface SlideBackground {
  color?: string;
}

export interface Slide {
  id?: string | number;
  content: string | string[];
  background?: SlideBackground;
}

export interface SlideRendererProps {
  slide: Slide;
  theme: {
    backgroundColor: string;
    textColor: string;
    bodySize: string;
    bodyFont: string;
    primaryColor?: string;
    secondaryColor?: string;
  };
  isThumbnail?: boolean;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ 
  slide, 
  theme, 
  isThumbnail = false 
}) => {
  // Si es una miniatura, delegamos la renderización al componente SlideThumbnailNavigator
  if (isThumbnail) {
    return null;
  }

  // Manejar contenido que puede ser string o array
  const contentString = Array.isArray(slide.content) 
    ? slide.content.join('\n') 
    : slide.content;

  // Extraer el contenido sin el título principal
  const processContent = (): { title: string; content: string } => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentString, 'text/html');
    
    // Encontrar y extraer el título principal
    const heading = doc.querySelector('h1, h2, h3');
    const title = heading?.textContent || 'Slide';
    
    // Eliminar el encabezado original para evitar duplicación
    if (heading) {
      heading.remove();
    }
    
    // Convertir el contenido restante a string
    const content = doc.body.innerHTML;
    
    return { title, content };
  };

  const { title, content } = processContent();
  const currentDate = new Date().toLocaleDateString();
  const slideNumber = slide.id ? slide.id.toString().replace('slide-', '') : '';

  const containerStyles: CSSProperties = {
    ...slideStyles.container.base,
    ...slideStyles.container.slide,
    backgroundColor: slide.background?.color || theme.backgroundColor,
    color: theme.textColor,
  };

  return (
    <div style={containerStyles} className="slide-container">
      <div className="slide-frame">
        <div className="slide-content">
          <div className="slide-title-area">
            <h2 className="slide-title">{title}</h2>
          </div>
          
          <div className="slide-main-content">
            <div 
              style={{
                fontFamily: theme.bodyFont,
              }}
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>
          
          <div className="slide-footer">
            <span className="slide-brand">PLEAD Presentation</span>
            <span className="slide-date">{currentDate}</span>
            <span className="slide-page-number">{slideNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideRenderer; 