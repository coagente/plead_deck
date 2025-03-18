import React from 'react';
import Presentation from './components/Presentation';
import { baseTheme } from './config/presentation.config';
import { defaultPresentation } from './config/presentation.content';

const App: React.FC = () => {
  return (
    <div className="app">
      <Presentation 
        slides={defaultPresentation.slides}
        theme={baseTheme}
      />
    </div>
  );
};

export default App; 