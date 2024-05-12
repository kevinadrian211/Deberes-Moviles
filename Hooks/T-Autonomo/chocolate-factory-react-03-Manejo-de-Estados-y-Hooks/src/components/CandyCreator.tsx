import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button, Form, Typography, notification } from 'antd';

const { Title, Text } = Typography;

enum CandyColor {
    Red = 'Red',
    Blue = 'Blue',
    Green = 'Green'
}

enum CandyFlavor {
    Strawberry = 'Strawberry',
    Blueberry = 'Blueberry',
    Lime = 'Lime'
}

enum CandyShape {
    Heart = 'Heart',
    Circle = 'Circle',
    Star = 'Star'
}

const useCandyCreator = () => {
    const [color, setColor] = useState<CandyColor>(CandyColor.Red);
    const [flavor, setFlavor] = useState<CandyFlavor>(CandyFlavor.Strawberry);
    const [shape, setShape] = useState<CandyShape>(CandyShape.Heart);
    const [productionCount, setProductionCount] = useState<number>(0);
    const [earnings, setEarnings] = useState<number>(0);

    useEffect(() => {
        console.log("Loading recommendations...");
    }, []);

    const handleColorChange = useCallback((value: CandyColor) => {
        setColor(value);
    }, []);

    const handleFlavorChange = useCallback((value: CandyFlavor) => {
        setFlavor(value);
    }, []);

    const handleShapeChange = useCallback((value: CandyShape) => {
        setShape(value);
    }, []);

    const createCandy = useCallback(() => {
        notification.success({
            message: 'Candy Created',
            description: `Your ${color}, ${flavor}, ${shape} shaped candy has been created successfully.`,
            placement: 'bottomRight'
        });
        setEarnings(earnings + 1);
    }, [color, flavor, shape, earnings]);

    const increaseProduction = useCallback(() => {
        setProductionCount(productionCount + 1);
    }, [productionCount]);

    return {
        color,
        flavor,
        shape,
        productionCount,
        earnings,
        handleColorChange,
        handleFlavorChange,
        handleShapeChange,
        createCandy,
        increaseProduction
    };
};

const CandyCreator: React.FC = () => {
    const {
        color,
        flavor,
        shape,
        productionCount,
        earnings,
        handleColorChange,
        handleFlavorChange,
        handleShapeChange,
        createCandy,
        increaseProduction
    } = useCandyCreator();

    return (
        <div>
            <Title level={2}>Create Your Own Candy</Title>
            <Form>
                <Form.Item label="Color">
                    <Input value={color} onChange={e => handleColorChange(e.target.value as CandyColor)} placeholder="e.g., Red" />
                </Form.Item>
                <Form.Item label="Flavor">
                    <Input value={flavor} onChange={e => handleFlavorChange(e.target.value as CandyFlavor)} placeholder="e.g., Strawberry" />
                </Form.Item>
                <Form.Item label="Shape">
                    <Input value={shape} onChange={e => handleShapeChange(e.target.value as CandyShape)} placeholder="e.g., Heart" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={createCandy}>
                        Create Candy
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <Title level={4}>Your Current Configuration:</Title>
                <Text>Color: {color}</Text>
                <br />
                <Text>Flavor: {flavor}</Text>
                <br />
                <Text>Shape: {shape}</Text>
            </div>
            <div>
                <Title level={4}>Production</Title>
                <Text>Number of candies produced: {productionCount}</Text>
                <Button type="primary" onClick={increaseProduction}>Increase Production</Button>
            </div>
            <div>
                <Title level={4}>Earnings</Title>
                <Text>Total earnings: {earnings}</Text>
            </div>
        </div>
    );
}

export default CandyCreator;
