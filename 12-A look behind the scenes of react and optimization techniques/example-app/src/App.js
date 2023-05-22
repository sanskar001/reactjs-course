// import React, { useState, useCallback } from "react";
// import Button from "./components/UI/Button/Button";
// import DemoOutput from "./components/Demo/DemoOutput";
// import "./App.css";

// let count = 0;

// function App() {
//   const [showPara, setShowPara] = useState(false);
//   const [allowToggle, setAllowToggle] = useState(false);

//   count++;
//   console.log("App Running!", count);

// const toggleParaHandler = (e) => {
//   setShowPara((prevShowPara) => {
//     return !prevShowPara;
//   });
// };

// const toggleParaHandler = useCallback(() => {
//   console.log("Hey i am here!");
//   if (allowToggle) {
//     setShowPara((prevShowPara) => {
//       return !prevShowPara;
//     });
//   }
// }, [allowToggle]);

// const allowToggleHandler = () => {
//   setAllowToggle(true);
// };

// Chapter 1: Component Updates in action
/*
  - Here we understanding how Real DOM changes with respect to state change in React Component.
  - Whenever State in component gets change then component function re-evaluate with updated state, React DOM find differences and re-render only those changes in real DOM (rest of elements stay unchanged).
  */

// return (
//   <div className="app">
//     <h1>Hi there!</h1>
//     {showPara && <p>This is new!</p>}
//     <Button onClick={toggleParaHandler} className="btn">
//       Toggle Paragraph
//     </Button>
//   </div>
// );

// Chapter 2: A Closer look at child component re-evaluation.
/*
  - Suppose consider we replace <p> element with its separate component called <DemoOutput/>
  - In which we can change its textCotent dynamically on the basis of props.
  - Now whenever state in parent component changes then component function get re-evaluate with updated state and also evaluate its child component. And render only changes inside Real DOM.
  - Suppose if i assign hardcoded value inside props like "false" which never changes with useState, so now whenever states changes, parent component re-evaluate again, child component also get evaluate but with no changes (If there is no change in component or element why they are re-evaluating - Is not waste of time?).
  - For bigger project where we have lots of child components, it un-necessary to re-evaluate them with no changes. --- CAUSE PERFORMACE ISSUE
  */

// return (
//   <div className="app">
//     <h1>Hi there!</h1>
//     <DemoOutput show={showPara} />
//     {/* <DemoOutput show={false} /> */}
//     <Button onClick={toggleParaHandler} className="btn">
//       Toggle Paragraph
//     </Button>
//     <Button onClick={allowToggleHandler} className="btn">
//       Allow Toggle
//     </Button>
//   </div>
// );
// }

import React, { useState, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";
import "./App.css";

// Chapter 5 - Optimizing with useMemo()

const App = (props) => {
  const [currentTitle, setTitle] = useState("Demo Title");
  const [valueList, setValueList] = useState([2, 10, 4, 7, 9]);

  const ChangeTitleHandler = () => {
    setTitle("New Title");
  };

  const AddValueHandler = () => {
    setValueList((prev) => {
      return [...prev, 22];
    });
  };

  const newArray = useMemo(() => valueList, [valueList]);

  return (
    <div className="app">
      <DemoList title={currentTitle} items={newArray} />
      <Button onClick={ChangeTitleHandler}>Change Title</Button>
      <Button onClick={AddValueHandler}>Add Value</Button>
    </div>
  );
};

export default App;
