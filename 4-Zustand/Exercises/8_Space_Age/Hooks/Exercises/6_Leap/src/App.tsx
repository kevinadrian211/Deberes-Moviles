import React from 'react';
import LeapYearChecker from './components/LeapYearChecker';

const App: React.FC = () => {
  return (
    <div>
      <h1>Leap Year Checker App</h1>
      <LeapYearChecker year={2008} /> {}
    </div>
  );
};

export default App;
