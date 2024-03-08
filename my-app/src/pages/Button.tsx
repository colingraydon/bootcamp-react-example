import React, { useState } from "react";
import "./Button.css";
import Navbar from "../components/Navbar";

const Button: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Navbar />
      <button onClick={increment}>Click me</button>
      <p className="text">Count: {count}</p>
    </div>
  );
};

export default Button;
