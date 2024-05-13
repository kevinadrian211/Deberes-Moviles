import './App.css';
import ParentComponentEvent from './components/EventCommunication/ParentComponent';
import ParentComponentProps from './components/PropsComunication/ParentComponent';
import ParentComponentState from './components/StateComunication/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>React with TypeScript - Examples</h1>
      <ParentComponentEvent />
      <ParentComponentProps />
      <ParentComponentState />
    </div>
  );
}

export default App;
