import React from 'react';

const ColorAry = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const;
export type Color = typeof ColorAry[number];

export function decodedValue([band1, band2]: Color[]): number {
  return (ColorAry.indexOf(band1) * 10) + ColorAry.indexOf(band2);
}

const CalculatorComponent: React.FC = () => {
  const [band1, setBand1] = React.useState<Color>('black');
  const [band2, setBand2] = React.useState<Color>('green');
  const [resistanceValue, setResistanceValue] = React.useState<number | null>(null);

  React.useEffect(() => {
    const value = decodedValue([band1, band2]);
    setResistanceValue(value);
  }, [band1, band2]);

  return (
    <div>
      <select value={band1} onChange={(e) => setBand1(e.target.value as Color)}>
        {ColorAry.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
      <select value={band2} onChange={(e) => setBand2(e.target.value as Color)}>
        {ColorAry.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
      {resistanceValue !== null && (
        <div>
          <p>Valor de la resistencia: {resistanceValue} Ohms</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorComponent;