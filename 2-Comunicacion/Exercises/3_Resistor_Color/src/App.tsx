import React, { useState } from 'react';
import ColorCode from './components/ColorCode';

const App: React.FC = () => {
  const [color, setColor] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setColor('');
  };

  return (
    <div>
      <h1>Color Code Finder</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a color:
          <input
            type="text"
            value={color}
            onChange={handleChange}
            placeholder="Enter a color"
          />
        </label>
        <button type="submit">Find Color Code</button>
      </form>
      {color && <ColorCode color={color} />}
    </div>
  );
};

export default App;
