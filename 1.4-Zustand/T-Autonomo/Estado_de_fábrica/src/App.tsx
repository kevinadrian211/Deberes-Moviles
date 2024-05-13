import ProduceButton from "./components/ProduceButton";
import DistributeButton from "./components/DistributeButton";
import StockDisplay from "./components/StockDisplay";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <h1>Factory Management</h1>
      <div>
        <h2>Product 1</h2>
        <ProduceButton />
        <DistributeButton />
        <StockDisplay />

        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
