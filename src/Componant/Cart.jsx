import React, { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

let initial_data = [
  { id: 1, name: "biryani", price: 50, qty: 1 },
  { id: 2, name: "burgar", price: 30, qty: 1 },
  { id: 3, name: "patiage", price: 80, qty: 1 }
];

function Cart() {
  const [data, setData] = useState(initial_data);

  function totalSum(data) {
    let sum = data.reduce((sum, el) => {
      return sum + el.price * el.qty;
    }, 0);
    return sum;
  }

  function updataData(id, payload) {
    let newData = data.map((item) => {
      if (item.id === id && item.qty + payload >= 0) {
        return {
          ...item,
          qty: item.qty + payload
        };
      } else {
        return item;
      }
    });
    setData(newData);
  }

  return (
    <div>
      <h1>Cart</h1>
      {data.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          qty={item.qty}
          price={item.price}
          id={item.id}
          hadleChangeQty={updataData}
        />
      ))}

      <Total total={totalSum(data)} />
    </div>
  );
}
export default Cart;
