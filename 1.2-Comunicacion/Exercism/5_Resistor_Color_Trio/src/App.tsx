import React from 'react';
import ResistorValue from './components/ResistorValue';

// Importa el tipo Color desde ResistorValue.tsx
import { Color } from './components/ResistorValue';

const App: React.FC = () => {
  const resistorBands: Color[] = ['black', 'green', 'blue'];

  return (
    <div>
      <h1>Decodificador de resistencias</h1>
      <ResistorValue bands={resistorBands} />
    </div>
  );
};

export default App;
