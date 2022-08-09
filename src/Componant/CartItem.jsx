import React from "react";
import "./cart.css";

const CartItem = ({ name, price, qty, id, hadleChangeQty }) => {
  return (
    <div className="items">
      <h3>{name}</h3>
      <h3>₹ {price}</h3>
      <div style={{ display: "flex", gap: "0.2rem" }}>
        <button onClick={() => hadleChangeQty(id, -1)}>-</button>
        <p>{qty}</p>
        <button onClick={() => hadleChangeQty(id, 1)}>+</button>
      </div>
    </div>
  );
};
export default CartItem;
