const redux = require("redux");

// Reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return { counter: 0 };
};

// To create Central store
const store = redux.createStore(counterReducer);

// Store Subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Link store with subscriber.
store.subscribe(counterSubscriber);

// Create Actions
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
