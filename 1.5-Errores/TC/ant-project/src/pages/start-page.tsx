import React from 'react';
import Component1 from '../components/start-component/component1';

const StartPage: React.FC = () => {
    return (
        <div style={{ width: '80vw', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
            <h1 style={{ marginBottom: '20px' }}>Página de componentes</h1>
            <Component1 />
        </div>
    );
};

export default StartPage;
