import React, { useState } from 'react';
import './parent_component.css';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="parent-component">
      <h1>Parent Component</h1>
      <ChildComponent count={count} setCount={setCount} />
      <p>Current count: {count}</p>
    </div>
  );
}
