import React from 'react';
import './child_component.css';

interface Props {
  onCustomEvent: (data: string) => void;
}

export default class ChildComponent extends React.Component<Props> {
  sendEvent = () => {
    this.props.onCustomEvent('Hello from Child!');
  };

  render() {
    return (
      <div className="child-component">
        <button onClick={this.sendEvent}>Send Event to Parent</button>
      </div>
    );
  }
}
