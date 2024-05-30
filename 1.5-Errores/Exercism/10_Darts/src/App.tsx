import React from 'react';
import ScoreCalculator from './Components/ScoreCalculator';

const App: React.FC = () => {
  return (
    <div>
      <h1>Score Calculator App</h1>
      <ScoreCalculator x={0} y={-1} />
      <ScoreCalculator x={8} y={6} />
      <ScoreCalculator x={2} y={2} />
    </div>
  );
}

export default App;
