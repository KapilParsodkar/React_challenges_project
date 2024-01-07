import React, { createContext, useState } from "react";

export const Cartitems = createContext();

function Context({ children }) {
  const [cart, setcart] = useState([]);
  return (
    <Cartitems.Provider value={{ cart, setcart }}>
      {children}
    </Cartitems.Provider>
  );
}

export default Context;
