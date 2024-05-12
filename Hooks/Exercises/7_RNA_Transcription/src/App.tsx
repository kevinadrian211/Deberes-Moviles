import ReactDOM from 'react-dom';
import { DnaToRnaConverter } from './components/DnaToRnaConverter';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <DnaToRnaConverter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
