import { Link, NavLink } from "react-router-dom";
import React from "react";
import classes from "./MainHeader.module.css";

// Chapter: Working with Links
/*
- Linking different pages by using achor element is working means whenever we click on link it redirect to dedicated component but it also reload the page which can results into lossing out application states.
- That is why this below approach does not follow SPA (Single Page Application) concept.

- Using <Link> Component from router library solve this problem means redirect to different page without reloading page and without lossing state. -- It generate Illusion.
*/

// const MainHeader = (props) => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="/welcome">Welcome</a>
//           </li>
//           <li>
//             <a href="/products">Products</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// ----------------------------------------------------------------------

// - There is one problem in using <Link/> component which it does not highlight anchor element in UI when that dedicated page is shown so, user can directly understand that.
// - For doing this task we need another component called <NavLink/>

// const MainHeader = (props) => {
//   return (
//     <header className={classes.header}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/welcome">Welcome</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// ----------------------------------------------------------------------

// apply "activeClassName" props in <NavLink/> which add class to link when it is active.

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
