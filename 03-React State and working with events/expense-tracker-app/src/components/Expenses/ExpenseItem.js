import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate.js";
import Card from "../UI/Card.js";

// 1. Listening to Events and Working with Event Handler.
/*
We can include event listener using "onClick" like props(attribute) into your HTML JSX code. Inside onClick we have assigned event handler function definition (not called).
Note: It is always a good practice to write "Handler" word at last of event handler function name.
*/

// function ExpenseItem(props) {

//   // This event handler function
//   const clickHandler = () => {
//     alert('Clicked !!!');
//   }

//   return (
//     <Card className="expense-item">
//       <ExpenseDate myDate={props.myDate}></ExpenseDate>
//       <div className="expense-item__description">
//         <h2>{props.myTitle}</h2>
//         <div className="expense-item__price">${props.myAmount}</div>
//       </div>
//       <button onClick = {clickHandler}>Change Title</button>
//     </Card>
//   );
// }

// -------------------------------------------------------

// 2. How Component function are executed?
/*
- Basically Components are just javascript function which takes props as argument and return JSX code.
- We call this components function by using it as custom html element inside other parent components eg. <ExpenseItem />.
- Here Below why this click event handler does not changing expenses title inside DOM.
- Reason is because React execute this component for once means react render this components once into DOM.
- After that if there is event occur, React will not change this component state in this way.
- That is why we need to understand States in React.
*/

// function ExpenseItem(props) {
//   let myTitle = props.myTitle;

//   // This event handler function
//   const clickHandler = () => {
//     myTitle = "Updated!";
//   };

//   return (
//     <Card className="expense-item">
//       <ExpenseDate myDate={props.myDate}></ExpenseDate>
//       <div className="expense-item__description">
//         <h2>{myTitle}</h2>
//         <div className="expense-item__price">${props.myAmount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }

// export default ExpenseItem;

// -------------------------------------------------------

// 3. Working with State
/*
- As we are using normal javascript varaible "myTitle" inside event handler to change Expense title inside DOM, but it does not work because React will ignore such variables for changing state.
- For doing this task we need extra help from React means we need to import function called "useState" which is kind of React hook for managing state.

- TUTORIAL: useState()

  Eg. const [state, setState] = useState(initialState);

- We pass that variable name or value which is gonna change state of component when event occur.
- This function returns a stateful value, and a function to update it.
- During the initial render, the returned state (recent state value) is the same as the value passed as the first argument (initialState).
- The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the that specific component inside which this useState() function called.
- During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.
- As we can see here myTitle is kind of instance of state of component.
- We call this useState function of 4 times for same component "ExpenseItem" but React set their state independently that when we click on one of them, then changes happen specifically to that component.

Notes: 
  1. Do not call useState() function outside component or inside some nested function.
  2. That's very common when events occurs we updates state, You can update states for whatever reason you may have.
*/

// function ExpenseItem(props) {
//   const [myTitle, setTitle] = useState(props.myTitle);

//   // This event handler function
//   const clickHandler = () => {
//     setTitle('Updated!');
//     console.log(myTitle);
//   };

//   console.log(myTitle + "✨");

//   return (
//     <Card className="expense-item">
//       <ExpenseDate myDate={props.myDate}></ExpenseDate>
//       <div className="expense-item__description">
//         <h2>{myTitle}</h2>
//         <div className="expense-item__price">${props.myAmount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }

//----------------------------------------------------------------------

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate myDate={props.myDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.myTitle}</h2>
        <div className="expense-item__price">${props.myAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
