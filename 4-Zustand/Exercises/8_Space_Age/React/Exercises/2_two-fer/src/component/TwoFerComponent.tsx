import React, { useState } from 'react';

function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
}

const TwoFerComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('One for you, one for me.');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    setMessage(twoFer(name));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter a name"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
};

export default TwoFerComponent;
