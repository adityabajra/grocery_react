import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems.js";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const editCompleted = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <>
      <section className="section-center">
        <Items items={groceryItems} />
      </section>
    </>
  );
};

export default App;
