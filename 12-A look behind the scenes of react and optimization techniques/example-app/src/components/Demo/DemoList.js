import React, { useMemo } from "react";
import "./DemoList.css";

// Chapter 5 - Optimizing with useMemo()
/*

- React useMemo() Hook
- The React useMemo Hook returns a memoized value.
- Think of memoization as caching a value so that it does not need to be recalculated.
- The useMemo Hook only runs when one of its dependencies update.
- This can improve performance.
- The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

- The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running like "Sorting".

- Eg. useMemo(() => { return value}, [dependencies])
*/

const DemoList = (props) => {
  console.log("DEMO LIST RUNNING");

  //   const sortedArray = props.items.sort((a, b) => a - b);

  const sortedArray = useMemo(() => {
    console.log("SORTING RUNNING");
    return props.items.sort((a, b) => a - b);
  }, [props.items]);

  return (
    <div className="demo-list">
      <h2>{props.title}</h2>
      <ul>
        {sortedArray.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DemoList;
