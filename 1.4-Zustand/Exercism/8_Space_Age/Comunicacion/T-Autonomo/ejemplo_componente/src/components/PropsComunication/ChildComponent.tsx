import React from 'react';
import './child_component.css';

interface Props {
  message: string;
}

export default class ChildComponent extends React.Component<Props> {
  render() {
    return (
      <div className="child-component">
        <p>{this.props.message}</p>
      </div>
    );
  }
}
