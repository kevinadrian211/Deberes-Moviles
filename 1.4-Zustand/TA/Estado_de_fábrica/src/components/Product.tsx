import React from "react";
import { useGums } from "../store/gumStore";

const Product: React.FC = () => {
  const gumIdRef = React.useRef<number>(Math.random());
  const gumId = gumIdRef.current;
  const { produce, distribute, stock } = useGums((state) => ({
    produce: state.produce,
    distribute: state.distribute,
    stock: state.stock[gumId],
  }));

  const handleProduce = () => {
    produce(gumId, 1);
  };

  const handleDistribute = () => {
    distribute(gumId, 1);
  };

  return (
    <div>
      <h2>Gum {gumId}</h2>
      <button onClick={handleProduce}>Produce 1 Gum</button>
      <button onClick={handleDistribute}>Distribute 1 Gum</button>
      <div>Stock: {stock}</div>
    </div>
  );
};

export default Product;
