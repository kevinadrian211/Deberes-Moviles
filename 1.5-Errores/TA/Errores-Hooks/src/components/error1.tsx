import React, { useState } from 'react';

const ErrorExample: React.FC = () => {
  // Error: No desestructurar correctamente los valores devueltos por useState
  // Incorrecto
  const [userData, setUserData] = useState({ name: '', age: 0 }); // Falta desestructurar

  // Corrección
  // const [{ name, age }, setUserData] = useState({ name: '', age: 0 });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, name: event.target.value });
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, age: parseInt(event.target.value) });
  };

  return (
    <div>
      <p>Nombre: {userData.name}</p>
      <input type="text" value={userData.name} onChange={handleNameChange} />
      <p>Edad: {userData.age}</p>
      <input type="number" value={userData.age.toString()} onChange={handleAgeChange} />
    </div>
  );
};

export default ErrorExample;
