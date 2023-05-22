// import { useSelector, useDispatch } from "react-redux";

// import classes from "./Counter.module.css";

// // - Understanding "useSelector" hook
// /*
// - A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
// - It also automatically set subscription of this component to centralized redux store.
// - Whenever specified state "counter" changes update inside store then subscribed component will automatically re-execute with updated state.
// */

// // "useDisptach()" - A hook to access the redux dispatch function.

// const Counter = () => {
//   // Using "useSelector" and subscribing to store
//   const counter = useSelector((state) => state.counter);

//   // Get dispatch function
//   const dispatch = useDispatch();

//   const incrementCounterHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   // - Here in below dispatch action we have also declare additional value inside action object.
//   const increaseCounterHandler = () => {
//     dispatch({ type: "increase", value: 5 });
//   };

//   const decrementCounterHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementCounterHandler}>Increment</button>
//         <button onClick={increaseCounterHandler}>Increase by 5</button>
//         <button onClick={decrementCounterHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// ===============================================================

// Chapter: Working with multiple state properties.
/*
- Consider you want to make feature like when we click "toggle counter" button then counter will show and hide.
- This task can be done with useState() locally, because this type state is only belongs to this "Counter" component.

- But just for example we are using redux store for this tutorial.
*/

// import { useSelector, useDispatch } from "react-redux";
// import classes from "./Counter.module.css";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const isCounterShown = useSelector((state) => state.isCounterShown);
//   const dispatch = useDispatch();

//   const incrementCounterHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const increaseCounterHandler = () => {
//     dispatch({ type: "increase", value: 5 });
//   };

//   const decrementCounterHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {isCounterShown && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementCounterHandler}>Increment</button>
//         <button onClick={increaseCounterHandler}>Increase by 5</button>
//         <button onClick={decrementCounterHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// ===============================================================

// Chapter: Working with redux toolkit.
/*
 */

import { counterActions } from "../store/counter-slice";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isCounterShown = useSelector((state) => state.counter.isCounterShown);
  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    // Passing pay load value
    // Eg. {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    dispatch(counterActions.increase(5));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterShown && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
