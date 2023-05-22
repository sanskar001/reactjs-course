import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
// import store from "./store/redux-store";
import store from "./store/redux-toolkit-store";

// React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
