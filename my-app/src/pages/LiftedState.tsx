import { useState } from "react";
import Navbar from "../components/Navbar";
import ChildButton from "../components/ChildButton";
import ChildText from "../components/ChildText";

const LiftedState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleSetCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Navbar />
      <h1>Lifted State</h1>
      <ChildButton onClick={handleSetCount} />
      <ChildText count={count} />
    </div>
  );
};

export default LiftedState;
