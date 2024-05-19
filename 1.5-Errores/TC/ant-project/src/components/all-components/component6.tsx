import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Component6: React.FC = () => {
    return (

            <Select defaultValue="lucy" style={{ width: 200 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>

    );
};

export default Component6;
