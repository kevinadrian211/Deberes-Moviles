import React from 'react';
import Component2 from '../components/all-components/component2';
import Component3 from '../components/all-components/component3';
import Component4 from '../components/all-components/component4';
import Component5 from '../components/all-components/component5';
import Component6 from '../components/all-components/component6';
import Component7 from '../components/all-components/component7';

const ComponentPage: React.FC = () => {
    return (
        <div style={{ width: '80vw', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
            <h1 style={{ marginBottom: '20px' }}>Página de componentes</h1>
                <Component2 />
                <Component3 />
                <Component4 />
                <Component5 />
                <Component6 />
                <Component7 />
        </div>
    );
};

export default ComponentPage;