// import { useState, useEffect } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  // Consuming custom hook "useCounter";
  // Note: Built in hook inside our custom hook are always have unique state to where they are consuming in components..
  const returnCounter = useCounter();

  // ---- OLD CODE -----
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  return <Card>{returnCounter}</Card>;
};

export default ForwardCounter;
