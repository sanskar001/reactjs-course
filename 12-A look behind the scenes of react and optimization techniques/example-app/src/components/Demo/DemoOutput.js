import React from "react";

const DemoOutput = (props) => {
  console.log("DEMO OUTPUT RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

// export default DemoOutput;
export default React.memo(DemoOutput);

// Chapter 3: Preventing un-necessay re-evaluation with React.memo().
/*
  - What does memo() do?
  - It tells React that for this component, which it gets as a argument, React should look at the props this component gets and check the new value for all those props and compare it to the previous value those props got.
  - And only if the value of a prop changed, the component should be re-execute.
  - And if the parent component changed but the props values from that component here did not change, component execution will be skipped.

  - This thing may raise a question:
  - Question: Why are not we using that React.memo() on all components, if it allows use to optimize them?

  - Answer: Because this optimization comes at cost. Here React needs to do two things.
       1. It needs to store the previous props value.
       2. It needs to make that comparsion.
    That of course, also has its own performance cost.
    So, therefore its depends on how much props component have and how complex your component tree is.

    - It is good practice to apply React.memo() on large and complex component tree to break its branch conditionally to prevent it from un-necessary execution.
  */
