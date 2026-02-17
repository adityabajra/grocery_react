import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="section-center">
        <Items items={groceryItems} />
      </section>
    </>
  );
}

export default App;
