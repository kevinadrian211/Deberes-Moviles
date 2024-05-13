import React from "react";
import { useGumStore } from "../store/gumStore";

const ProduceButton: React.FC = () => {
  const produce = useGumStore((state) => state.produce);

  const handleProduce = () => {
    produce(1);
  };

  return <button onClick={handleProduce}>Produce 1 Gum</button>;
};

export default ProduceButton;
