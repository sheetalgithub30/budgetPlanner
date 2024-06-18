import React, { useContext, useState } from "react";
import { ExpenseContext } from "../App";

export default function AddExpense() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();

  const { addExpense } = useContext(ExpenseContext);
  return (
    <div id="addEx">
      <h1>Add Expenses</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addExpense(name, amount);
          setName("");
          setAmount("");
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Title"
          type="text"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
          placeholder="Cost"
          type="number"
        />
        <input type="submit" id="submit"/>
      </form>
    </div>
  );
}