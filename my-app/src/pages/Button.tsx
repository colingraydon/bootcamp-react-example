import React, { useEffect, useState } from "react";
import "./Button.css";
import Navbar from "../components/Navbar";

const Button: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("component mounted");
  }, []);

  useEffect(() => {
    console.log("component updated");
  }, [count]);

  return (
    <div>
      <Navbar />
      <button onClick={increment}>Click me</button>
      <p className="text">Count: {count}</p>
    </div>
  );
};

export default Button;
