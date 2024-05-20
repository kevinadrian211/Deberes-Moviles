import React, { useState } from 'react';

const Error6: React.FC = () => {
  // Error 6: Nombrar incorrectamente las funciones de los custom hooks
  // Incorrecto
  function customHook() {
    const [value, setValue] = useState(0); // Incorrecto, falta el prefijo "use"
  }

  // Corrección
  // function useCustomHook() {
  //   const [value, setValue] = useState(0);
  // }

  return (
    <div>
      <p>Error 6</p>
    </div>
  );
};

export default Error6;
