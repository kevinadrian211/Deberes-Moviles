import React, { useState } from 'react';

const Error10: React.FC = () => {
  // Error 10: No devolver un valor válido en un custom hook
  // Incorrecto
  function useCustomHook() {
    useState(0); // Olvidar devolver un valor
  }

  // Corrección
  // function useCustomHook() {
  //   const [value, setValue] = useState(0);
  //   return [value, setValue]; // Devolver un valor válido
  // }

  return (
    <div>
      <p>Error 10</p>
    </div>
  );
};

export default Error10;
