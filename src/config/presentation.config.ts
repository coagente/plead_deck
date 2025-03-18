import { PresentationTheme } from '../types/presentation';

// Configuración base para presentaciones
export const baseTheme: PresentationTheme = {
  // Colores
  backgroundColor: "#ffffff",
  textColor: "#333333",
  primaryColor: "#dddddd",
  secondaryColor: "#0066cc",
  
  // Tipografía
  bodyFont: "'Roboto', sans-serif",
  bodySize: "1.5rem"
};

// Configuración compartida para slides y thumbnails
export const slideStyles = {
  container: {
    base: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative' as const,
    },
    slide: {
      width: '100%',
      height: '100%',
      padding: '2rem',
    },
    thumbnail: {
      width: '100%',
      height: '100%',
      padding: 0,
    }
  },
  content: {
    base: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    slide: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      padding: '2rem',
    },
    thumbnail: {
      fontSize: '0.5rem',
      lineHeight: 1.2,
      padding: 0,
    }
  },
  thumbnailNavigator: {
    container: {
      padding: '1rem',
      gap: '1rem',
    },
    item: {
      borderRadius: '6px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.2s ease',
    },
    number: {
      padding: '2px 6px',
      borderRadius: '3px',
      fontSize: '0.7rem',
      fontWeight: 'bold',
      opacity: 0.8,
    }
  }
}; 