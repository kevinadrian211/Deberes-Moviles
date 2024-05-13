import './child_component.css';

interface Props {
  count: number;
  setCount: (count: number) => void;
}

export default function ChildComponent({ count, setCount }: Props) {
  return (
    <div className="child-component">
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
