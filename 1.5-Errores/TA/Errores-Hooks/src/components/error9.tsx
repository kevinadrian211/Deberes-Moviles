import React, { useState } from 'react';

const Error9: React.FC = () => {
  // Error 9: Usar hooks fuera de un componente funcional
  // Incorrecto
  const [value, setValue] = useState(0); // Incorrecto, debe estar dentro de un componente funcional

  // Corrección
  // import React, { useState } from 'react';
  //
  // function MyComponent() {
  //   const [value, setValue] = useState(0);
  //   // Resto del componente...
  // }

  return (
    <div>
      <p>Error 9</p>
    </div>
  );
};

export default Error9;
