import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = (props) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const emailInput = useRef();
  const passwordInput = useRef();

  const loginFormSubmit = (e) => {
    e.preventDefault();

    const enteredData = {
      email: emailInput.current.value.trim(),
      password: passwordInput.current.value.trim(),
    };

    // props.onLogin(enteredData);

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginFormSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInput} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
