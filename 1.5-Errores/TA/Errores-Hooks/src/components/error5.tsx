import React, { useState } from 'react';

const Error5: React.FC = () => {
  // Error 5: No devolver un valor válido en el custom hook
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
      <p>Error 5</p>
    </div>
  );
};

export default Error5;
