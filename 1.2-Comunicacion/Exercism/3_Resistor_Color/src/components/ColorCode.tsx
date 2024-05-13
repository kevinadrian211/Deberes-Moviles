import React from 'react';

export const colorCode = (color: string): number | undefined => {
  const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  const index = COLORS.indexOf(color.toLowerCase());
  return index !== -1 ? index : undefined;
};

const ColorCode: React.FC<{ color: string }> = ({ color }) => {
  const colorIndex = colorCode(color);
  return (
    <div>
      {colorIndex !== undefined ? (
        <p>The color code for {color} is {colorIndex}</p>
      ) : (
        <p>Color {color} not found</p>
      )}
    </div>
  );
};

export default ColorCode;
