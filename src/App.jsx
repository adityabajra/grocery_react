import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { groceryItems } from "./data/groceryItems.js";
import { nanoid } from "nanoid";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState(groceryItems);
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  const updateItemName = (newName) => {
    const newItems = items.map((item) => {
      if (item.id === editId) {
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(newItems);
    setEditId(null);
    toast.success("item updated");
  };
  const addItem = (ItemName) => {
    const newItem = {
      id: nanoid(),
      name: ItemName,
      completed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    toast.success(" grocery item added");
  };

  const editCompleted = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };

  return (
    <>
      <section className="section-center">
        <ToastContainer position="top-center" />
        <Form
          addItem={addItem}
          updateItemName={updateItemName}
          editItemId={editId}
          itemToEdit={items.find((item) => item.id === editId)}
          inputRef={inputRef}
        />
        <Items
          items={items}
          editCompleted={editCompleted}
          removeItem={removeItem}
          setEditId={setEditId}
        />
      </section>
    </>
  );
};

export default App;
