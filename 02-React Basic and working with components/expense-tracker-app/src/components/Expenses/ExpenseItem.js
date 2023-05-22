// Import CSS Style file.
import "./ExpenseItem.css";

// Importing Expense Date component
import ExpenseDate from "../Expenses/ExpenseDate.js";

// Import Card Component
import Card from "../UI/Card.js";

// ============================================================

// In React, components is basically kind of javascript function which return JSX code which comprises of HTML.

// There is convention in React that component name should be written in "PascalCase".

// function ExpenseItem(){
//     return <h2>Expense Items 💰</h2>;
// }

// --------------------------------------------------------------

// Lets write some complex JSX code

/*
Note: In return HTML code there must have only one root element, means we can not write two or more sibling root element in one component. 

Here we can see that there is only div element with class 'root' is only root element.
*/

// function ExpenseItem() {
//   return (
//     <div class="root">
//       <div>March 28th 2022</div>
//       <div>
//         <h2>Car Insurance</h2>
//         <div>$294.5</div>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------

// Lets include CSS Styling

// Note: use className attribute, not class.

// function ExpenseItem() {
//   return (
//     <div className="expense-item">
//       <div>March 28th 2022</div>
//       <div className="expense-item__description">
//         <h2>Car Insurance</h2>
//         <div className="expense-item__price">$294.5</div>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------

// Outputting Dynamic Data and Working with Expression in JSX.
// JSX Expression is basically any javascript expression which is written inside {}.

// function ExpenseItem() {
//   const myDate = new Date(2022, 28, 12).toString();
//   const myTitle = "Car Insurance";
//   const myAmount = 294.5;

//   return (
//     <div className="expense-item">
//       <div>{myDate}</div>
//       <div className="expense-item__description">
//         <h2>{myTitle}</h2>
//         <div className="expense-item__price">${myAmount}</div>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------

// Passing Data using "props"

// This "props" stands for properties of React component which is same as HTML attributes.

// Note: As per React we always pass only one argument in component function which consist of {key:value} pair data like JS object.

/* Here we use JavaScript Date toLocaleString() : returns a Date object as a string, using locale settings.

Syntax: Date.toLocaleString(locales, options)

*/

// function ExpenseItem(props) {
//     const month = props.myDate.toLocaleString("en-US", {month: "long"});
//     const year = props.myDate.toLocaleString("en-US", {year: "numeric"});
//     const day = props.myDate.toLocaleString("en-US", {day: "numeric"});

//   return (
//     <div className="expense-item">
//       <div>
//         <div>{month}</div>
//         <div>{year}</div>
//         <div>{day}</div>
//       </div>
//       <div className="expense-item__description">
//         <h2>{props.myTitle}</h2>
//         <div className="expense-item__price">${props.myAmount}</div>
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------

// Splitting Component into multiples components
// Here we separate ExpenseDate component for date.

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <ExpenseDate myDate={props.myDate}></ExpenseDate>
//       <div className="expense-item__description">
//         <h2>{props.myTitle}</h2>
//         <div className="expense-item__price">${props.myAmount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

// --------------------------------------------------------------

// The Concept of Compisition ("Children props")
/*
Composition: It is basically idea of creating big components with combination of small components.

Still we have only seen how to use component inside other component definition for example we have used ExpenseDate component inside ExpenseItem component.

Here we are moving futher, How to include components inside component for example how to use components in between opening and closing tags of other parent components.
*/

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
