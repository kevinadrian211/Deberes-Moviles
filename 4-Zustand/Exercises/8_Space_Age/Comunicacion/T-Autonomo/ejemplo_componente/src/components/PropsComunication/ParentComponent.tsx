import React from 'react';
import './parent_component.css';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends React.Component {
  render() {
    return (
      <div className="parent-component">
        <h1>Parent Component</h1>
        <ChildComponent message="Message for the child from the parent" />
      </div>
    );
  }
}
