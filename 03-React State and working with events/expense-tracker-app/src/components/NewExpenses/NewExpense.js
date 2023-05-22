import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

// Child to parent component communication(Bottom-up)
/*
- For getting expense new data from child component, we need to create function which is pass inside child component tag as property.
- Similarly pass data from this component to "App" component finally, So from there we can show add new ExpenseItem.
*/

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toFixed(2)
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} /> 
    </div>
  );
}

export default NewExpense;
