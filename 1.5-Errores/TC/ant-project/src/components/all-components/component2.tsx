import React from 'react';
import { Card } from 'antd';

const Component2: React.FC = () => {
    return (
            <Card
                title="Card personalizado"
                style={{ width: 300, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
            >
                <p>Contenido de la tarjeta</p>
            </Card>
    );
};

export default Component2;
