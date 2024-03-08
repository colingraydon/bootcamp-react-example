import React from "react";
import "./FirstComponent.css";

interface UserProps {
  name: string;
  age: number;
  favoriteColor: string;
}

const User: React.FC<UserProps> = ({ name, age, favoriteColor }: UserProps) => {
  return (
    <div className="outer">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Favorite Color: {favoriteColor}</p>
    </div>
  );
};

export default User;
