import React, { useState } from "react";
import "./ExpenseForm.css";

/*
- Here we can see that we can also pass "event" parameter inside event handler function in React as like addEventListener in vanilla JS.

- Here we are working with multiple states which are dedicated for title, amount and date and this states are totally independent from each other.
*/

// function ExpenseForm() {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   function titleChangeHandler(event) {
//     setEnteredTitle(event.target.value);
//   }

//   function amountChangeHandler(event) {
//     setEnteredAmount(event.target.value);
//   }

//   function dateChangeHandler(event) {
//     setEnteredDate(event.target.value);
//   }

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// }

// ----------------------------------------------------------------------

// Using one State Instead (What's Better?)
/*
- Here we are basically converting multiple states into single state.
- For doing this we wrap all user input data (title, amount and date) into one userInput object.
- We have passed empty string inside intital state object.
- During set new user input in event handler, it is important to note that if you update only one input parameter then rest of parameters will omitted or vanished.
- Always update the whole object when you have multiple states. 
*/

// function ExpenseForm() {
//   // const [enteredTitle, setEnteredTitle] = useState("");
//   // const [enteredAmount, setEnteredAmount] = useState("");
//   // const [enteredDate, setEnteredDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

//   function titleChangeHandler(event) {
//     // setEnteredTitle(event.target.value);

//     setUserInput({
//       ...userInput, // Spreading userInput object.
//       enteredTitle: event.taregt.value, // override the enteredTitle value
//     });
//   }

//   function amountChangeHandler(event) {
//     // setEnteredAmount(event.target.value);
//     setUserInput({
//       ...userInput,
//       enteredAmount: event.taregt.value,
//     });
//   }

//   function dateChangeHandler(event) {
//     // setEnteredDate(event.target.value);
//     setUserInput({
//       ...userInput,
//       enteredDate: event.taregt.value,
//     });
//   }

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// }

// --------------------------------------------------------------------

// Updates States that depends on previous state.
/*
- Look There is one problem in doing this way handling muliples states: that is we are depending on the previous states while updating states.
- As we know that React will change states instantly, but it schedule to change state.
- This may cause problem in multiple states situation.
- For solving this we need convert this setUserInput into function form.

Note: This approaches are alternative to single state condition that we used firstly, It is good to use single state for different event handlers.
*/

// function ExpenseForm() {
//   // const [enteredTitle, setEnteredTitle] = useState("");
//   // const [enteredAmount, setEnteredAmount] = useState("");
//   // const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

//   function titleChangeHandler(event) {
//     // setEnteredTitle(event.target.value);
//     // setUserInput({
//     //   ...userInput, // Spreading userInput object.
//     //   enteredTitle: event.taregt.value, // override the enteredTitle value
//     // });

//     setUserInput((previousState) => {
//       return {...previousState, enteredTitle: event.target.value};
//     });
//   }

//   function amountChangeHandler(event) {
//     // setEnteredAmount(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredAmount: event.taregt.value,
//     // });

//     setUserInput((previousState) => {
//       return {...previousState, enteredAmount: event.target.value};
//     });
//   }

//   function dateChangeHandler(event) {
//     // setEnteredDate(event.target.value);
//     // setUserInput({
//     //   ...userInput,
//     //   enteredDate: event.taregt.value,
//     // });
//     setUserInput((previousState) => {
//       return {...previousState, enteredDate: event.target.value};
//     });
//   }

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// }

// --------------------------------------------------------------------

// Adding Two Way Binding
/*
Question: How to remove entered value inside input box?
Answer: That is why we have use useState() function, It has one advantage which is that we can implement Two-way binding which is that we should not only listen changes in input by onChange event, instead we can also reset or change input value programmatically.

- We have pass value attribute inside input Element and also reset setEnteredTitle('') back to empty string after form submit.
*/

// Child to parent component communication(Bottom-up)
/*
- As we know that how get values from parent component to child components by using "props".
- As we also know this expense new data should be present in App.js component so, that we can show this into ExpenseItems.
- For Doing this we need to pass this expense new data to "newExpense" component then to "App" component (Do not break line).
- For passing data from child to parent component we need to create function inside parent component which takes this data as argument.
- Use that function inside child using "props".
*/

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData); // Here we call function pass expenseData to parent component.

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
