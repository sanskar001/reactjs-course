import { createStore } from "redux";

// Note: Always remember that never mutate state (object, array) this may results into bugs and unpredectible condition in the future, So always override state by copying previous state and change it then return.

const initialState = { counter: 0, isCounterShown: true };

// Counter reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isCounterShown: state.isCounterShown,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      isCounterShown: state.isCounterShown,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isCounterShown: state.isCounterShown,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      isCounterShown: !state.isCounterShown,
    };
  }
  return initialState;
};

// Create a new redux centralised store with "createStore" method
const store = createStore(counterReducer);

export default store;
