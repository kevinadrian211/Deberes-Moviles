import React from 'react';
import { PangramChecker } from './components/PangramChecker';

const App: React.FC = () => {
    const paragraph = "The quick brown fox jumps over the lazy dog";

    return (
        <div>
            <h1>Verificador de Pangramas</h1>
            <PangramChecker paragraph={paragraph} />
        </div>
    );
};

export default App;
