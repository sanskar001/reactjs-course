import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import "./App.css"
import NewExpense from "./components/NewExpenses/NewExpense.js"

const App = () => {
  const dummy_expenses = [
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

// 2. Using stateful list
/*
- Here we are going to update our expenses list by adding new epense after clicking on "Add Expense" button, for that we have used "useState()" function.
- There is one problem / warning in this approach which is called  "Each child in a list should have a unique "key" prop". Lets see this in our next chapter.
*/

  const [expenses, setExpenses] = useState(dummy_expenses);

  // This is function which lifting up data from child component.
  function addExpenseHandler(expense){
    console.log('In App.js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
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