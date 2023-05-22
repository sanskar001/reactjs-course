import React, { useState, useEffect, Fragment } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

// Chapter: Using "useEffect" hook
/*
- The useEffect Hook allows you to perform side effects in your components.
- Some examples of side effects are: fetching data, directly updating the DOM, and timers.
- useEffect accepts two arguments. The second argument is optional.

- useEffect(<function>, <dependency>)

- 1. No dependency passed:
      useEffect(() => {
        //Runs on every render gone to infinite loop.
      });

- 2. An empty array:
      useEffect(() => {
        //Runs only on the first render
      }, []);

3. Props or state values:
      useEffect(() => {
        //Runs on the first render
        //And any time when any dependency value changes
      }, [prop, state]);

Note: "useEffect" hook with dependencies prevent us from infinite loop and bugs.
*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // When page starts loading this below checks happen directly which may cause infinite loop and bugs. That is why we require "useEffect" in place of this.

  // const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
  // if (storedUserLoggedInInfo === "1") {
  //   setIsLoggedIn(true);
  // }

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    // Here value: '1' stands for login.
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // remove local storage isLoggedIn.
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  /////// Context.Provider ////////
  /*
  
  - Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
  - The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
  - All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
  - We can also pass function pointer in context value.
  */

  return (
    // <Fragment>
    //   <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    //   <main>
    //     {!isLoggedIn && <Login onLogin={loginHandler} />}
    //     {isLoggedIn && <Home onLogout={logoutHandler} />}
    //   </main>
    // </Fragment>
    <AuthContext.Provider
      value={{ isLoggedin: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
