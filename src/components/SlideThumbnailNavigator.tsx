import React, { useRef } from 'react';
import type { Slide } from '../types/presentation';
import type { PresentationTheme } from '../types/presentation';

interface SlideThumbnailNavigatorProps {
  slides: Slide[];
  currentSlideIndex: number;
  onSlideSelect: (index: number) => void;
  theme: PresentationTheme;
}

const SlideThumbnailNavigator: React.FC<SlideThumbnailNavigatorProps> = ({
  slides,
  currentSlideIndex,
  onSlideSelect,
  theme
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Función para extraer información relevante de cada diapositiva
  const getSlideInfo = (slide: Slide): { title: string; summary: string } => {
    if (typeof slide.content !== 'string') {
      return { title: "Slide", summary: "" };
    }
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(slide.content, 'text/html');
    
    // Extraer título
    const heading = doc.querySelector('h1, h2, h3, h4, h5, h6');
    const title = (heading?.textContent || "Slide").trim();
    
    // Extraer resumen según el tipo de diapositiva
    let summary = "";
    
    // Diapositiva de problemas
    if (title.includes("PROBLEM")) {
      const points = doc.querySelectorAll("li");
      if (points.length > 0) {
        summary = points[0].textContent?.trim() || "";
        if (summary.length > 40) summary = summary.substring(0, 40) + "...";
      }
    }
    // Diapositiva de solución
    else if (title.includes("SOLUTION")) {
      const subheading = doc.querySelector("h3, h4");
      summary = subheading?.textContent?.trim() || "Comprehensive platform";
    }
    // Diapositiva de mercado
    else if (title.includes("MARKET")) {
      const figures = doc.querySelectorAll(".text-center div");
      if (figures.length > 0) {
        summary = figures[0].textContent?.trim() || "$84B Market";
      }
    }
    // Diapositiva de modelo de negocio
    else if (title.includes("BUSINESS")) {
      summary = "Diversified revenue streams";
    }
    // Diapositivas de competencia
    else if (title.includes("COMPETITION")) {
      summary = "Key competitive advantages";
    }
    // Diapositivas de tracción
    else if (title.includes("TRACTION")) {
      const progress = doc.querySelector(".current-progress") || doc.querySelector("h3");
      summary = progress?.textContent?.trim() || "Current progress & alliances";
    }
    // Diapositivas financieras
    else if (title.includes("FINANCIAL")) {
      summary = "5-year projections & metrics";
    }
    // Diapositivas de inversión
    else if (title.includes("INVESTMENT")) {
      const amount = doc.querySelector(".edf5ff");
      summary = amount?.textContent?.trim() || "$800,000 funding round";
    }
    // Diapositivas de roadmap
    else if (title.includes("ROADMAP")) {
      summary = "12-month plan & 5-year vision";
    }
    // Diapositivas de equipo
    else if (title.includes("TEAM")) {
      summary = "Founders & key advisors";
    }
    // Diapositivas de contacto
    else if (title.includes("CONTACT")) {
      summary = "Get in touch with us";
    }
    // Primera diapositiva (título)
    else if (title === "PLEAD") {
      summary = "Legal services with AI";
    }
    // Genérica para otras diapositivas
    else {
      const paragraphs = doc.querySelectorAll("p");
      if (paragraphs.length > 0) {
        summary = paragraphs[0].textContent?.trim() || "";
        if (summary.length > 40) summary = summary.substring(0, 40) + "...";
      }
    }
    
    return { title, summary };
  };
  
  return (
    <div className="thumbnail-navigator">
      <div className="thumbnails-container" ref={containerRef}>
        {slides.map((slide, index) => {
          const { title, summary } = getSlideInfo(slide);
          const bgColor = slide.background?.color || theme.backgroundColor;
          
          return (
            <div 
              key={slide.id || index}
              className={`thumbnail ${index === currentSlideIndex ? 'active' : ''}`}
              onClick={() => onSlideSelect(index)}
              style={{ backgroundColor: bgColor }}
            >
              <div className="thumbnail-content">
                <div className="thumbnail-title-area">
                  <div className="thumbnail-title">{title}</div>
                </div>
                
                <div className="thumbnail-main-content">
                  <div className="thumbnail-summary">{summary}</div>
                </div>
                
                <div className="thumbnail-footer">
                  <div className="thumbnail-slide-number">{index + 1}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideThumbnailNavigator; 