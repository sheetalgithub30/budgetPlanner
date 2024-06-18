import React from "react";

export default function Expense({ name, amount, deleteExpense, index }) {
  return (
    <div id="expense">
      <p> {name}</p>
      <p> ₹ {amount}</p>
      <button onClick={() => deleteExpense(index)}>X</button>
    </div>
  );
}