import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("BUTTON RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// export default Button;
export default React.memo(Button);

// Chapter-3-Applying React.memo() to Button component.
/*
- After applying React.memo() on <Button/> component, it is again executing on every click events, Why?
- Reason is whenever click event occurs pointer function in parent class runs, in which state update function called which re-execute parent component which result in re-creating new pointer function (JS object) with same content.
- But this new pointer function is different from previous one (function are reference type JS object).

- Object1 === Object2 => false [Always]

- Then React.memo() does not work in that case.
- But its does not mean that we cannot do something when there is object, array or function inside props.
- There is way of working this condition.
*/

// ------------------------------------------------------

// Chapter-4 Preventing function re-creation with useCallback().
/*
- We can make React memo() work for props value are object using new React hook called useCallback().
- This hook allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
- With that one in the same function object is stored so one in the same place in memory, therefore comparsion does work.

- useCallback(() => {}, [...Dependencies])

- eg. const toggleParaHandler = useCallback(() => {
    console.log("Hey i am here!");
    if (allowToggle) {
      setShowPara((prevShowPara) => {
        return !prevShowPara;
      });
    }
  }, [allowToggle]);

- Here as we can understand "useCallback()" create function for first time and after that it will only re-create function when its dependencies (External variable) change, with that change it re-create function.
*/
