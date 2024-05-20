import React, { useCallback, useMemo } from 'react';

const Error8: React.FC = () => {
  // Error 8: No usar useMemo o useCallback cuando es necesario
  // Simulación de función costosa
  const computeExpensiveValue = (a: number, b: number) => {
    console.log('Computando valor costoso...');
    return a + b;
  };

  const a = 5;
  const b = 3;

  // Incorrecto
  const memoizedValue = computeExpensiveValue(a, b); // No usar useMemo para memoizar el valor
  const memoizedCallback = (a: number, b: number) => {
    console.log('Callback invocado...');
    return a + b;
  }; // No usar useCallback para memoizar la función

  // Corrección
  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  // const memoizedCallback = useCallback((a: number, b: number) => {
  //   console.log('Callback invocado...');
  //   return a + b;
  // }, []);

  return (
    <div>
      <p>Error 8</p>
    </div>
  );
};

export default Error8;
