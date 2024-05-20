import React, { useState } from 'react';

const Error3: React.FC = () => {
  // Error 3: Modificar el estado directamente
  // Incorrecto
  const [count, setCount] = useState(0);
  setCount(count + 1); // Modificar el estado directamente

  // Corrección
  // setCount(prevCount => prevCount + 1);

  return (
    <div>
      <p>Contador: {count}</p>
    </div>
  );
};

export default Error3;
