// import React, { useState } from "react";

// import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
// import styled from "styled-components";

// 1. Setting Dynamic Inline Styling
/*
- Here we have seen how to set inline styling dynamically with respect to some condition.
- In inline style property we assign style object inside JSX expression.
- Eg. style={{ color: !isValid ? "red" : "black" }}

- Problem: This approach of setting dynamic inline styling, cause code repeatibility, increase complexity JSX code, which will cause bugs in future.
*/

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = (event) => {

//     // This below condition will reset the input element when we write something inside this.

//     if(event.target.value.trim().length > 0){
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   // Input element styling object (Inline styling)
//   const inputStyle = {
//     borderColor: !isValid ? "red" : "grey",
//     backgroundColor: !isValid ? "lightsalmon" : "lightblue",
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
//         <input
//           style={inputStyle}
//           type="text"
//           onChange={goalInputChangeHandler}
//         />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// -------------------------------------------------------------------------------------

//  2. Setting CSS Classes Dynamically
/*
- Here we can see how to add CSS class dynamically into JSX code HTML element using JSX Expression.
- We have also added new "invalid" class to CSS file along with "form-control" class.

- Problem: In this approach of using simple CSS classes is good but there is one issue is that normal CSS classes which is defined in CSS files are actually not scoped and developer can also use same class name for more than one element.

- For solving this problem we have two approach - 
        1. Styled component package.
        2. CSS Modules. [BEST]
*/

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = (event) => {
//     if (event.target.value.trim().length > 0) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//     setEnteredValue("");
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={`form-control ${!isValid ? "invalid" : ""}`}>
//         <label>Course Goal</label>
//         <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// -------------------------------------------------------------------------------------

//  4. Styled Components and Dynamic Props.
/*

- Here we can see how to create styled Component using div HTML element.
- We have also added className "invalid" on some condition with JSX Expression.
- In Styled component we can also use props(properties) same as normal component.
- Eg.  const FormControl = styled.div`color: ${props => (props.condition)? 'red':'blue'}`

*/

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//       font-weight: bold;
//       display: block;
//       margin-bottom: 0.5rem;
//     }

//     & input {
//       display: block;
//       width: 100%;
//       border: 1px solid #ccc;
//       font: inherit;
//       line-height: 1.5rem;
//       padding: 0 0.25rem;
//     }

//     & input:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }

//     &.invalid input {
//       border-color: red;
//       background-color: rgb(248, 191, 191);
//     }

//     &.invalid label {
//       color: red;
//     }
//   `;

//   const goalInputChangeHandler = (event) => {
//     if (event.target.value.trim().length > 0) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//     setEnteredValue("");
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <FormControl className={!isValid && "invalid"}>
//         <label>Course Goal</label>
//         <input
//           type="text"
//           value={enteredValue}
//           onChange={goalInputChangeHandler}
//         />
//       </FormControl>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// ------------------------------------------------------------------

// CSS Modules and Dynamic Styling

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
