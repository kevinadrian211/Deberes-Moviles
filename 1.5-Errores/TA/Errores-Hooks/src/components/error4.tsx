import React, { useState } from 'react';

const Error4: React.FC = () => {
  // Error 4: Usar hooks dentro de condicionales
  // Incorrecto
  if (true) {
    const [value, setValue] = useState(''); // Incorrecto, debe estar fuera del condicional
  }

  // Corrección
  // const [value, setValue] = useState('');

  return (
    <div>
      <p>Error 4</p>
    </div>
  );
};

export default Error4;
