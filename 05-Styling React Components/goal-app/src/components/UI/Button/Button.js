// import React from "react";
// import styled from "styled-components";

// import "./Button.css";

// 3. Introduction to Styled Component Package.
/*

- To download styled-components run: npm install --save styled-components

- Let's say you want to create a simple and reusable <Button /> component that you can use throughout your application.

- This Button variable here is now a React component that you can use like any other React component! This unusual backtick syntax is a new JavaScript feature called a "tagged template literal".

- You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks!

- Eg. styled.button`` (Here "button" is html element and it can be any element like a, h1, div, p etc)

- "&" - denotes selected element/class

- You can also add media query directly and easily.

- By using Styled Component we can create dedicated styling for our component which is important form big App project.

*/

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media screen and (min-width: 700px){
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

import React from "react";
import styles from "./Button.module.css";


// CSS Modules
/*
--- Adding a CSS Modules Stylesheet

- Project supports CSS Modules alongside regular stylesheets using the "[name].module.css" file naming convention. 

-  CSS Modules allows the scoping of CSS by automatically creating a unique classname.

- CSS Modules let you use the same CSS class name in different files without worrying about naming clashes.

- Importing CSS file is little bit different from normal.
      - import styles from "./Button.module.css";

- Here "styles" (or any name) is basically an object which consist of all the CSS class name used inside that CSS file.

- You can access them with simple JS object syntax.

- Eg. styles.["class-name"] or styles.className

- This CSS Module add CSS classes inside HTML element uniquely Eg. Button_button_fdaz (Component_class_randomId)

*/

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
