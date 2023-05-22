import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

/*
- ///// Context.Consumer /////

- A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.

- Requires a function as a child. The function receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

- There is another better way of consuming context value using "useContext" hook.
*/

// const Navigation = (props) => {
//   return (
//     <nav className={classes.nav}>
//       <AuthContext.Consumer>
//         {(val) => {
//           return (
//             <ul>
//               {val.isLoggedin && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {val.isLoggedin && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {val.isLoggedin && (
//                 <li>
//                   <button onClick={props.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           );
//         }}
//       </AuthContext.Consumer>
//     </nav>
//   );
// };

const Navigation = (props) => {
  const val = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {val.isLoggedin && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {val.isLoggedin && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {val.isLoggedin && (
          <li>
            <button onClick={val.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
