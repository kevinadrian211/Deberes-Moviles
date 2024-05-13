import React from 'react';
import ReactDOM from 'react-dom';
import TwoFerComponent from './component/TwoFerComponent.tsx';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the TwoFer App!</h1>
      <TwoFerComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default TwoFerComponent;
