import React from 'react';
import { DnDCharacter } from './components/DnDCharacter';

const App: React.FC = () => {
  const character = new DnDCharacter();

  return (
    <div>
      <h1>D&D Character Sheet</h1>
      <p>Strength: {character.strength}</p>
      <p>Dexterity: {character.dexterity}</p>
      <p>Constitution: {character.constitution}</p>
      <p>Intelligence: {character.intelligence}</p>
      <p>Wisdom: {character.wisdom}</p>
      <p>Charisma: {character.charisma}</p>
      <p>Hitpoints: {character.hitpoints}</p>
    </div>
  );
}

export default App;
