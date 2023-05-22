import React from "react";

// Chapter: Using React Context API
/*

- React Context is a way to manage state globally.

- It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

///// The Problem  /////

State should be held by the highest parent component in the stack that requires access to the state.

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

- "React.createContext" - Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

Eg. const MyContext = React.createContext(defaultValue);

- The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.

/////// Context.Provider ////////

Eg. <MyContext.Provider value={some value}>

- Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
- The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

///// Context.Consumer /////

Eg. <MyContext.Consumer>
  {value => {
    returning component JSX code
  }}
</MyContext.Consumer>

- A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

- Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

- There is another better way of consuming context value using "useContext" hook.

Eg. const value = useContext(MyContext);

- Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

- When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider

Note: Correct: useContext(MyContext)
      Incorrect: useContext(MyContext.Consumer)
      Incorrect: useContext(MyContext.Provider)

*/

// const AuthContext = React.createContext(false);
const AuthContext = React.createContext({
  isLoggedin: false,
  onLogout: () => {},
});

// Component
export const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
