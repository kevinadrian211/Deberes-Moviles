// src/components/index.tsx

import React, { useState } from 'react';
import { colorCode, COLORS } from './ColorCodeUtils';

const ColorCodeComponent: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);
  const [code, setCode] = useState<number | null>(null);

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCode(colorCode(selectedColor));
  };

  return (
    <div>
      <h1>Find the Color Code</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedColor} onChange={handleColorChange}>
          {COLORS.map((color, index) => (
            <option key={index} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
        <button type="submit">Get Code</button>
      </form>
      {code !== null && <p>Code for {selectedColor}: {code}</p>}
    </div>
  );
};

export default ColorCodeComponent;
