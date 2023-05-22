import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toFixed(2),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  function startEditingHandler(event) {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onCancel = {stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
