import React, { useState } from "react";

import ExpensesList from "./ExpensesList.js";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseChart from "./ExpenseChart.js";

// 1. Rendering Lists of Data
/*
- As of now we have added ExpenseItem in static manner means we added 4 items as per 4 given data, It means it not dynamic.
- For making this dynamic we need to use Array "map" function on given items data which return array of <ExpenseItem> components.
- Which is then render by React.
*/

// -----------------------------------------------------------------------

// 3. Understanding "keys" [Important]
/*
- WARNING: Each child in a list should have a unique "key" prop.

- There is problem in our previous approach that we have done in chapter 2.
- For React all these list items look similar, it only sees that my Array changed that its now longer than before, hence it simply renders an additional "div" and it adds that at the end. And then it simply walks through all the items and updates the content inside of every item to match the array content again.
- The final result is correct here in DOM, but from performance perspective this is not great because all items are visited and updated, and also this may also cause bugs.

- Why does React, behave like this?
- It currently simply checks the length of array and then has a look at the numbers of items were already rendered.
- The individual items all looks similar to react though, it can not know where a new item should be added?
- That is why this warning is coming.

- Add unique "key" prop inside our <ExpenseItem> component (you can also add this to HTML element) and assign unique id to this as value.
- Which makes each <ExpenseItem> different from each other to React.
- React has special concept which "unique 'key' prop" when it comes to rendering lists of data which exists to ensure that React is able to update and render such lists effciently without performance losses or bugs which may occur.

- Note: Always add "key" unique prop to rendering list.
*/

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   function filterChangeHandler(selectedYear) {
//     setFilteredYear(selectedYear);
//   }

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onFilterChange={filterChangeHandler}
//       />
//       {props.items.map((expense) => (
//         <ExpenseItem
//           key={expense.id}                     // unique key prop [Special property]
//           myTitle={expense.title}
//           myAmount={expense.amount}
//           myDate={expense.date}
//         />
//       ))}
//     </Card>
//   );
// };

// -----------------------------------------------------------------------

// How to make Expense year Filter feature?: Use array filter() method.

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   function filterChangeHandler(selectedYear) {
//     setFilteredYear(selectedYear);
//   }

//   const filteredExpenses = props.items.filter(expense => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onFilterChange={filterChangeHandler}
//       />
//       {filteredExpenses.map((expense) => (
//         <ExpenseItem
//           key={expense.id}                     // unique key prop [Special property]
//           myTitle={expense.title}
//           myAmount={expense.amount}
//           myDate={expense.date}
//         />
//       ))}
//     </Card>
//   );
// };

// -----------------------------------------------------------------------

// Outputting Condition content
/*
- What happens when there is no items present for selected filtered year? Means what should be rendered then?

- First approach - Using Ternary operator.
*/

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   function filterChangeHandler(selectedYear) {
//     setFilteredYear(selectedYear);
//   }

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onFilterChange={filterChangeHandler}
//       />

//       {filteredExpenses.length === 0 ? (
//         <p>No Expenses found!</p>
//       ) : (
//         filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id} // unique key prop [Special property]
//             myTitle={expense.title}
//             myAmount={expense.amount}
//             myDate={expense.date}
//           />
//         ))
//       )}
//     </Card>
//   );
// };

/*
- What happens when there is no items present for selected filtered year? Means what should be rendered then?

- Second approach - Using Ternary operator with "Locgical && Short-circuiting".
*/

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   function filterChangeHandler(selectedYear) {
//     setFilteredYear(selectedYear);
//   }

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onFilterChange={filterChangeHandler}
//       />

//       {filteredExpenses.length ===0 && <p>No Expenses found!</p>}
//       {filteredExpenses.length > 0 &&
//         filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id} // unique key prop [Special property]
//             myTitle={expense.title}
//             myAmount={expense.amount}
//             myDate={expense.date}
//           />
//         ))}
//     </Card>
//   );
// };

/* Third and best approach to write clean and lean JSX code is by storing JSX code into variable. */

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   function filterChangeHandler(selectedYear) {
//     setFilteredYear(selectedYear);
//   }

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   let expenseContent = <p>No Expense found!</p>;

//   if(filteredExpenses.length > 0){
//     expenseContent = filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         myTitle={expense.title}
//         myAmount={expense.amount}
//         myDate={expense.date}
//       />
//     ));
//   }

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onFilterChange={filterChangeHandler}
//       />
//       {expenseContent}
//     </Card>
//   );
// };

// ------------------------------------------------------------------

// Adding Conditional return statement
// Here we have created a new component "ExpensesList" for returning conditial statement.

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
