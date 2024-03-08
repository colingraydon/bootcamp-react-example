import React from "react";
import Navbar from "../components/Navbar";
import Conditional from "./Conditional";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello, World!</h1>
      <Conditional />
    </div>
  );
};

export default Home;
