// Importing React component
import React from "react";
// import ExpenseItem from "./components/Expenses/ExpenseItem.js";
import Expenses from "./components/Expenses/Expenses.js";

// This App component is our root component in React DOM, therefore i can not place this with other components inside component folder.

// This App React component may comprises of other sub components. In index.js this App root component will render.

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

  // This "props" stands for properties of React component which is same as HTML attributes which is extra information and features.
  // These properties are arguments for React compoments(function).

  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// <ExpenseItem></ExpenseItem> is our React Custom HTML component.
