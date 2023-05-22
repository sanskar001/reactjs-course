import { createSlice } from "@reduxjs/toolkit";

// Counter slice and its state.
const initialCounterState = {
  count: 0,
  isCounterShown: true,
};

// Lets create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    increase: (state, action) => {
      state.count = state.count + action.payload;
    },
    toggleCounter: (state) => {
      state.isCounterShown = !state.isCounterShown;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
