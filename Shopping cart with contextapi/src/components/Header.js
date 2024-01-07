import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartitems } from "../Context";
function Header() {
  const { cart } = useContext(Cartitems);
  return (
    <div>
      <span>Shopping Cart with Context api</span>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
