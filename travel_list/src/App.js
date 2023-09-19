import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Packaginglist from "./Packaginglist";
import Stats from "./Stats";
function App() {
  const [items, setitems] = useState([]);

  function handleadditems(item) {
    setitems((items) => [...items, item]);
  }

  function deleteitems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function Clearlist() {
    const confirmed = window.confirm("are you sure to delete all items");
    if (confirmed) {
      setitems([]);
    }
  }

  function toggleitem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <diV className="app">
      <Logo />
      <Form onadditems={handleadditems} />
      <Packaginglist
        items={items}
        ondelete={deleteitems}
        ontoggle={toggleitem}
        Clearlist={Clearlist}
      />
      <Stats items={items} />
    </diV>
  );
}

export default App;
