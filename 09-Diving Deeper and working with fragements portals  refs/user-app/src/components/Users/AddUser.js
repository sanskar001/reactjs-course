// import React, { useState, Fragment } from "react";
// import Card from "../UI/Card.js";
// import styles from "./AddUser.module.css";
// import Button from "../UI/Button.js";
// import ErrorModal from "../UI/ErrorModal.js";
// // import Wrapper from "../UI/Wrapper.js";

// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();

//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "Invalid input",
//         message: "Please enter a valid name and age (non-empty values).",
//       });
//       return;
//     }

//     if (+enteredAge < 1) {
//       setError({
//         title: "Invalid age",
//         message: "Please enter a valid age (greater than zero).",
//       });
//       return;
//     }

//     const userData = {
//       id: Math.random().toString(),
//       name: enteredUsername,
//       age: enteredAge,
//     };
//     props.onAddUser(userData);
//     setEnteredUsername("");
//     setEnteredAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   Chapter-1 JSX Limitation
//
//     - JSX is special and non-standard syntax which enabled in React projects.

//     - There is one limitation in JSX code which is: You can not return more than one "root" element (you  also can not store more than one "root" JSX element in a variable after returning from a component function.)

//     - Eg. return (
//               <h2>Hello There!</h2>
//               <p>This does not work!</p>
//             );

//     - Error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

//     - Question: Why this error is coming?
//     - Answer: In vanilla javascript we cannot return more than one object or data at once, means we cannot return more than one object, array, number, string, boolean.
//     - And this above JSX code will convert in background into "React.createElement()" in Javascript and these more than one object cannot be return at once.

//     - Solution1: To Solve this above problem we have to wrap this whole JSX code inside wrapper element (like <div> or any other) and component (like <Card/>).

//     Eg. return (<div>
//                   <h2>Hello There!</h2>
//                   <p>This does not work!</p>
//                 </div>);

//     - Solution2: In place of wrapper component or element we can also use javascript array to wrap these JSX code, but this approach we require "key" for each distinct elements or components inside JSX code.

//     Eg. return ([<h2 key="h2_key">Hello There!</h2>,
//                   <p key="p_key">This does not work!</p>]);

//     - This above approach is actually bit complex and require extra attention to write unique keys to each distinct element or components. That is why wrapper approach is more easier than this.

//     - But there one problem in "Wrapper approach" which is called "<div> Soup"
//     - In bigger application, you can easily end up with "tons of unnecessary <div>" (or other wrapper) which add no semantic meaning or structure to the page but are only there because of React and JSX requirement.
//     - This Wrapping approach in bigger app can also cause much render time in DOM, and also CSS style breaking issues.

//  --------------------------------------------------------------------------

//   Chapter-2 Wrapping JSX code trick
//
//     - There is one trick which can help us to come out of "<div> soup" problem.
//     - Make a new component, let called it <Wrapper></Wrapper> which is dedicatelly use to wrap JSX code without using extra <div> like element.
//     - Eg. function Wrapper(props){
//             return props.children;
//         }

//     - Eg. <Wrapper>
//           JSX code.
//           </Wrapper>
//

//   // --------------------------------------------------------------------------

//    Chapter-3 React Fragment
//
//   - Actually we do not require to create extra <Wrapper> component to solve "<div> soup" problem because React provide us built in wrapper component similar like our <Wrapper> component which is called "<Fragment>...</Fragment> or <React.Fragmenet>...</React.Fragment> or <>...</>".

//   - import {Fragment} from "react";
//

//   // --------------------------------------------------------------------------

//   Chapter-4 Understanding React Portals

//   return (
//     <Fragment>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onClose={errorHandler}
//         />
//       )}
//       <Card className={styles.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             value={enteredUsername}
//             id="username"
//             type="text"
//             onChange={usernameChangeHandler}
//             autoFocus
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             value={enteredAge}
//             id="age"
//             type="number"
//             onChange={ageChangeHandler}
//           />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </Fragment>
//   );
// };

// export default AddUser;

// ------------------------------------------------------------------------

// Chapter: Working with "refs" or called reference.

/*

- "refs" or we call reference.
- Now there is one little drawback of using "useState" hook with form input, which is reading every keystrok of form input using "useState" is kind of bulky task and has more work.
- To get rid from this problem we need another hook from React called "useRef".

- import {useRef} from "react";

- Basically this "useRef" hook is use to read DOM elements or also write into DOM elements (but do not write or manipluate DOM using "useRef" instead for that use "useState").

- For using this, you just need to initialize this and link them to respective DOM element using "ref" props.

-- Note: Do not use "refs" for manipulating DOM, only use them for reading data from DOM.
-- Note: For manipulating in DOM use "useState" or State methods.
-- BOTH TECHNIQUES ARE GOOD, ITS IS UP OUR USE CASE.
*/

//  Chapter- Controlled and Uncontrolled Components.

/*

- Now here we going to understand meaning of controlled and uncontrolled components.

- Using "refs" with input fields makes input element "uncontrolled".
- Using "state" with input fields makes input element "controlled".

- Why "uncontrolled"? - Because there are internal state so to value which is reflected in them is not controlled by "react". we rely on default feature of input, we then fetch value with a react feature, but we do not feed data back into the input.

- When we set new value to input using "refs", here we are not using "react" but in the end we are using native DOM api for setting input values.

- That is why this approach makes input element "uncontrolled".

- "Why Controlled?" - Because when we are using "state", firstly we fetch data from input and then we feed data back into input field using "value" props even after manipulating data.

*/

import React, { useState, useRef } from "react";
import Card from "../UI/Card.js";
import styles from "./AddUser.module.css";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
// import Wrapper from "../UI/Wrapper.js";

const AddUser = (props) => {
  const [error, setError] = useState();

  // Initializing references and linking them with their respective input elements.
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    // For consuming references

    // console.log(inputNameRef);
    // console.log(inputNameRef.current.value);
    // console.log(inputAgeRef.current.value);

    const enteredUsername = inputNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than zero).",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
    };
    props.onAddUser(userData);

    // Using Reference to reset input field (Manipulating DOM)
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" autoFocus ref={inputNameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={inputAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
