import React, { useEffect } from 'react';

const Error7: React.FC = () => {
  // Error 7: No limpiar los efectos correctamente
  // Incorrecto
  useEffect(() => {
    console.log('Efecto ejecutado');

    return () => {
      console.log('Efecto limpiado');
    };
  }); // Falta el array de dependencias

  // Corrección
  // useEffect(() => {
  //   console.log('Efecto ejecutado');

  //   return () => {
  //     console.log('Efecto limpiado');
  //   };
  // }, []);

  return (
    <div>
      <p>Error 7</p>
    </div>
  );
};

export default Error7;
