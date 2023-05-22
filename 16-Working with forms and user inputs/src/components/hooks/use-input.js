// import { useState } from "react";

// // Creating custom hook

// const useInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valuedisValid = validateValue(enteredValue);
//   const hasError = !valuedisValid && isTouched;

//   const inputBlurHandler = () => {
//     setIsTouched(true);
//   };

//   const valueChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     enteredValue: enteredValue,
//     hasError: hasError,
//     isValid: valuedisValid,
//     valueChangeHandler: valueChangeHandler,
//     inputBlurHandler: inputBlurHandler,
//     reset: reset,
//   };
// };

// export default useInput;

import { useReducer } from "react";

// Creating custom hook

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.val,
      isTouched: false,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }

  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valuedisValid = validateValue(inputState.value);
  const hasError = !valuedisValid && inputState.isTouched;

  const inputBlurHandler = () => {
    dispatchInput({ type: "BLUR" });
  };

  const valueChangeHandler = (event) => {
    dispatchInput({ type: "INPUT", val: event.target.value });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    enteredValue: inputState.value,
    hasError: hasError,
    isValid: valuedisValid,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
