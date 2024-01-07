import React, { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Cartitems } from "../Context";

function Cart() {
  const [total, settotal] = useState();
  const { cart, setcart } = useContext(Cartitems);
  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, []);

  return (
    <div>
      {cart.length == 0 ? (
        <p>the cart is empty</p>
      ) : (
        <>
          <span>My cart </span>
          <span>total Rs{total}</span>
          <div>
            {cart.map((prod) => (
              <SingleProduct prod={prod} cart={cart} setcart={setcart} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
