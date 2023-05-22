// import { createSlice, configureStore } from "@reduxjs/toolkit";

// // Chapter: Creating centralized store using redux-toolkit (which already consist of core redux, we don not need to install core redux).

// /*

// - "createSlice": A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

// - "configureStore" - A friendly abstraction over the standard Redux createStore() function.

// */

// const initialState = { count: 0, isCounterShown: true };

// // Lets create slice
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the "Immer" library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes

//       state.count++;
//     },
//     decrement: (state) => {
//       state.count--;
//     },
//     increase: (state, action) => {
//       state.count = state.count + action.payload;
//     },
//     toggleCounter: (state) => {
//       state.isCounterShown = !state.isCounterShown;
//     },
//   },
// });

// // Create a new redux centralised store with "configureStore" method
// // Lets add slice reducer to redux store, by defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export const counterActions = counterSlice.actions;

// export default store;

// ========================================================================

// Working with multiple states

import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
