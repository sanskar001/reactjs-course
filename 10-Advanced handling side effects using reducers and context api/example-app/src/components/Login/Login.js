// import React, { useState, useEffect } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";

// Chapter: "useEffect and Dependencies, clean-up function"

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//    Here we have used "useEffect" hook to handle form validation with entered email and password value dependencies, means whenever their values changes this useEffect function will run.

//    Note: There is one problem in this below simple approach is that we are running this side effect after keystroke that can send muliple https request to server which may cause network latency and these number of requests are unnecessary. Similarly for other situation also.

//   useEffect(() => {
//       console.log("INPUT CHANGED!");
//     setFormIsValid(
//       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//     );
//   }, [enteredEmail, enteredPassword]);

//   To solve above problem we need to understand concept of "clean-up function" which is used to clean unnecessay side effect operations and to clean memory leakage.
//   - Here this return clean up function which do not run for first time when useEffect runs, but after that if will run.
//   - Because of this, clearTimeout() function clear all the timer except last one.
//   - In this way we can send data once after all keystroke stops perfectly.
//   - Also handle this delay time (500ms) as per standard typing speed.
//   useEffect(() => {
//     const timer = setTimeout(() => {
//        console.log("INPUT CHANGED!");
//       setFormIsValid(
//         enteredEmail.includes("@") && enteredPassword.trim().length > 6
//       );
//     }, 500);

//     // Lets return clearn up function
//     return () => {
//       // console.log("CLEAN UP!", timer);
//       clearTimeout(timer);
//     };
//   }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.includes("@") && enteredPassword.trim().length > 6
//     // );
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
//     // );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes("@"));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//             autoComplete="off"
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

// =================================================================================

// Chapter: Introduction of "useReducer" and reducer in general.

/*
- "useReducer()" is basically use for state management. But it is more complex than "useState()".
- Sometimes you have more complex state - for example if it got mutiple states. multiple ways of changing it or dependencies to other states.
- "useState()" then often becomes hard or error-prone to use- its is easy to write bad, inefficient or buggy code in such scenarios.
- "useReducer()" can be used as a replacement for "useState()" if you need "more powerful state management".

- Here in below examples we can see that one state is actually depends on different states.

Eg. setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );

Eg. setEmailIsValid(enteredEmail.includes("@"));

- This above code run absolutey, but may cause bugs some scenerios.
- Here we can see that we are changing one type of state on the basis of other type states (even it depends on previous state which can be done with "function form", but we can't because we are depending on other types of states while updating our state).
- "function form" can be use on same state type.
- That is why need to use "useReducer()" in such situation (even we can also use "useState" but is more complex and may cause bugs).

*/

// Chapter: using "useReducer()" hook.

import React, { useState, useEffect, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

// We can define "reducer()" function outside component function also because it is not depended on any data that is passed inside component.
// And reducer function gets all data automically by react while excuting.
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // Using "useEffect()" with "useReducer" state works perfect because it gets perfectly latest state.
  // Note: Here we pass specfic properties instead of entire object in dependencies and properties are those on which our effects depend on.
  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log("Inside timer!");
      setFormIsValid(
        // enteredEmail.includes("@") && enteredPassword.trim().length > 6
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   // event.target.value.trim().length > 6 && emailState.value.includes("@")
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes("@"));
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type="email"
          id="email"
          label="E-mail"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          type="password"
          id="password"
          label="Password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
