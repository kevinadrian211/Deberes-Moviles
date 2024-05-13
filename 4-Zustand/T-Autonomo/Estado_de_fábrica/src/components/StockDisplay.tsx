import React from "react";
import { useGumStore } from "../store/gumStore";

const StockDisplay: React.FC = () => {
  const stock = useGumStore((state) => state.stock);

  return <div>Stock: {stock}</div>;
};

export default StockDisplay;
