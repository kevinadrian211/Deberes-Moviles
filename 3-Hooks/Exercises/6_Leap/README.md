# Leap Year Checker App

Este es un proyecto simple de React que incluye un componente para verificar si un año dado es bisiesto o no.

## Componente `LeapYearChecker`

El componente `LeapYearChecker` es un componente de React que toma un año como entrada y determina si ese año es bisiesto o no, según las reglas del calendario gregoriano.

### Función `isLeap`

La lógica para verificar si un año es bisiesto o no se encuentra en la función `isLeap` dentro del componente `LeapYearChecker`. Esta función toma un año como parámetro y devuelve `true` si el año es bisiesto y `false` si no lo es.

### Uso del componente `LeapYearChecker`

Para utilizar el componente `LeapYearChecker`, simplemente importa y renderiza el componente en tu aplicación React, pasando el año que deseas verificar como prop.

```tsx
import React from 'react';
import LeapYearChecker from './components/LeapYearChecker';

const App: React.FC = () => {
  return (
    <div>
      <h1>Leap Year Checker App</h1>
      <LeapYearChecker year={2024} /> {/* Cambia el año aquí */}
    </div>
  );
};

export default App;
