import React from "react";
import { useGumStore } from "../store/gumStore";

const DistributeButton: React.FC = () => {
  const distribute = useGumStore((state) => state.distribute);

  const handleDistribute = () => {
    distribute(1); // Puedes cambiar la cantidad según las necesidades
  };

  return <button onClick={handleDistribute}>Distribute 1 Gum</button>;
};

export default DistributeButton;
