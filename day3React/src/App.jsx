import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import ProductTab from "./ProductTab";
// import Product from from ""./Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ProductTab />
    </div>
  );
}

export default App;
