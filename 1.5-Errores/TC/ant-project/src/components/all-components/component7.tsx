import React from 'react';
import { Progress } from 'antd';

const Component7: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Progreso:</h2>
            <Progress percent={30} style={{ marginBottom: '10px' }} />
            <Progress percent={50} status="active" style={{ marginBottom: '10px' }} />
            <Progress percent={70} status="exception" style={{ marginBottom: '10px' }} />
            <Progress percent={100} style={{ marginBottom: '10px' }} />
            <Progress percent={50} showInfo={false} style={{ marginBottom: '10px' }} />
        </div>
    );
};

export default Component7;
