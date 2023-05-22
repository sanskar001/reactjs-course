// import { React } from "react";
// import styles from "./ErrorModal.module.css";
// import Card from "./Card.js";
// import Button from "./Button.js";

// const ErrorModal = (props) => {
//   const closeModalHandler = (event) => {
//     props.onClose();
//   };

//   return (
//     <div>
//       <div className={styles.backdrop} onClick={closeModalHandler}></div>
//       <Card className={styles.modal}>
//         <header className={styles.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={styles.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={styles.actions}>
//           <Button type="button" onClick={closeModalHandler}>
//             Okay
//           </Button>
//         </footer>
//       </Card>
//     </div>
//   );
// };

// export default ErrorModal;

// --------------------------------------------

// Tutorial: Implementing React Portals.
/*

- Basically we require two thing to implement React portal - position in html file to port and telling to components to be part of portals.

- Create portal position in index.html file.
- Import {ReactDOM} from "react-dom" to use function called "ReactDOM.createPortal()".

- ReactDOM.createPortal(component to be port, position in DOM);

- Create separate components for backdrop and modal overlay and then add these to portal.
- Here we have also understand that how to use child separate components inside parent component in same module.

*/

import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Card from "./Card.js";
import Button from "./Button.js";

// Separate component for Backdrop
const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

// Separate component for Modal overlay
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClose}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
