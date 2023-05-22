import React from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import "./App.css"
import NewExpense from "./components/NewExpenses/NewExpense.js"

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // This is function which lifting up data from child component.
  function addExpenseHandler(expense){
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <h2 className = "app-heading">Expense Tracker App 💰</h2>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;