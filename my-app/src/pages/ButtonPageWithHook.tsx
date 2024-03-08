import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ButtonPageWithHook.css";

const ButtonPage = () => {
  const useCounters = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
    return { count, increment, decrement };
  };

  const { count, increment, decrement } = useCounters();
  return (
    <div>
      <Navbar />
      <h2>This is the Button Page</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div className={count > 0 ? "positive" : "negative"}>{count}</div>
    </div>
  );
};

export default ButtonPage;
