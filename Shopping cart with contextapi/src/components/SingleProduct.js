import React, { useContext } from "react";
import { Cartitems } from "../Context";

function SingleProduct({ prod }) {
  const { cart, setcart } = useContext(Cartitems);
  return (
    <div>
      <img src={prod.image} alt={prod.name} />
      <span>{prod.name}</span>
      <span style={{ fontWeight: 800 }}>${prod.price.substring(0, 3)}</span>
      {cart.includes(prod) ? (
        <button
          onClick={() => {
            setcart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            setcart([...cart, prod]);
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
