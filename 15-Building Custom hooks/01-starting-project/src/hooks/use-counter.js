import { useState, useEffect } from "react";

// Building our own custom hook.
/* 
- Here we are also using built in React hook like "useState" ans "useEffect" inside out custom hook.
- Here we are also returning state.
*/

const useCounter = (fowards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fowards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [fowards]);

  return counter;
};

export default useCounter;
