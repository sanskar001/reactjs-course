// import { useEffect, useState } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredTouched] = useState(false);

//   // Consider that we send name when enterdNameisValue equal to "true"
//   useEffect(() => {
//     if (enteredNameIsValid) {
//       console.log("Entered name is valid and you can send it to server.");
//     }
//   }, [enteredNameIsValid]);

//   const nameInputBlurHandler = () => {
//     setEnteredTouched(true);
//     setEnteredNameIsValid(enteredName.trim().length !== 0);
//   };

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);

//     if (enteredNameTouched) {
//       setEnteredNameIsValid(event.target.value.trim().length !== 0);
//     }
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     setEnteredTouched(true);

//     if (enteredName.trim().length === 0) {
//       setEnteredNameIsValid(false);
//       return;
//     }

//     setEnteredNameIsValid(true);

//     console.log(enteredName);
//     // const enteredValue = nameInputRef.current.value;
//     // console.log(enteredValue);

//     setEnteredName("");
//     setEnteredTouched(false);
//   };

//   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

//   const nameInputClasses = !nameInputIsValid
//     ? "form-control"
//     : "form-control invalid";

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           // ref={nameInputRef}
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputIsValid && (
//           <p className="error-text">Name should not be empty!</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// ===================================================================
// Optimized Form Handle and validation.

// import { useState, useEffect } from "react";

// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameTouched, setEnteredTouched] = useState(false);
//   const [formIsValid, setFormIsValid] = useState(false);

//   // Assinging input validation on every rendering.
//   const enteredNameIsValid = enteredName.trim().length !== 0;
//   const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

//   useEffect(() => {
//     setFormIsValid(enteredNameIsValid);
//   }, [enteredNameIsValid]);

//   const nameInputBlurHandler = () => {
//     setEnteredTouched(true);
//   };

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     setEnteredTouched(true);

//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName);

//     setEnteredName("");
//     setEnteredTouched(false);
//   };

//   const nameInputClasses = !nameInputIsValid
//     ? "form-control"
//     : "form-control invalid";

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//         {nameInputIsValid && (
//           <p className="error-text">Name should not be empty!</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid} type="submit">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

// ============================================================
// Using custom hook

import { useState, useEffect } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim().length !== 0);

  const {
    enteredValue: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(enteredNameIsValid && enteredEmailIsValid);
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName, enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name should not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter valid email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
