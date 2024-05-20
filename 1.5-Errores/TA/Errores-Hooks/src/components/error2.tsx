import React, { useEffect } from 'react';

const Error2: React.FC = () => {
  // Error 2: Olvidar agregar dependencias en useEffect
  // Incorrecto
  useEffect(() => {
    console.log('Efecto ejecutado');
  }); // Falta el segundo argumento: array de dependencias

  // Corrección
  // useEffect(() => {
  //   console.log('Efecto ejecutado');
  // }, []);

  return (
    <div>
      <p>Error 2</p>
    </div>
  );
};

export default Error2;
