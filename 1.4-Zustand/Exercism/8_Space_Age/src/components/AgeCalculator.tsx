import React, { useState } from 'react';

interface Planets {
    [key: string]: number
}

const AgeCalculator: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [planet, setPlanet] = useState<string>('earth');
    const [age, setAge] = useState<number>(0);

    const RATIOS: Planets = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 1,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    const calculateAge = () => {
        const ratio = RATIOS[planet];
        const calculatedAge = Number((seconds / 31557600 / ratio).toFixed(2));
        setAge(calculatedAge);
    };

    const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeconds(Number(event.target.value));
    };

    const handlePlanetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPlanet(event.target.value);
    };

    return (
        <div>
            <h1>Age Calculator</h1>
            <div>
                <label htmlFor="seconds">Age in seconds:</label>
                <input type="number" id="seconds" value={seconds} onChange={handleSecondsChange} />
            </div>
            <div>
                <label htmlFor="planet">Choose a planet:</label>
                <select id="planet" value={planet} onChange={handlePlanetChange}>
                    <option value="mercury">Mercury</option>
                    <option value="venus">Venus</option>
                    <option value="earth">Earth</option>
                    <option value="mars">Mars</option>
                    <option value="jupiter">Jupiter</option>
                    <option value="saturn">Saturn</option>
                    <option value="uranus">Uranus</option>
                    <option value="neptune">Neptune</option>
                </select>
            </div>
            <button onClick={calculateAge}>Calculate Age</button>
            <div>
                <p>Your age on {planet.charAt(0).toUpperCase() + planet.slice(1)} is: {age} years</p>
            </div>
        </div>
    );
};

export default AgeCalculator;
