import React from 'react';
import './parent_component.css';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends React.Component {
  handleEvent = (data: string) => {
    alert(`Event received: ${data}`);
  };

  render() {
    return (
      <div className="parent-component">
        <h1>Parent Component</h1>
        <ChildComponent onCustomEvent={this.handleEvent} />
      </div>
    );
  }
}
