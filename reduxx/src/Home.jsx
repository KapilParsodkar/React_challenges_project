import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);
  const addbtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const addbtn25 = () => {
    dispatch({
      type: "incrementByvalue",
      payload: 25,
    });
  };
  const subbtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const subbtn25 = () => {
    dispatch({
      type: "decrementByvalue",
      payload: -25,
    });
  };
  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addbtn}>increment</button>
      <button onClick={addbtn25}>increment by value</button>

      <button onClick={subbtn}>decrement</button>
      <button onClick={subbtn25}>decrement by value</button>
    </div>
  );
}

export default Home;
