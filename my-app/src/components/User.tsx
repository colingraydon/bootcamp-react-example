import React from "react";
import "./User.css";

interface UserProps {
  name: string;
  age: number;
  favoriteColor: string;
}

const User: React.FC<UserProps> = ({ name, age, favoriteColor }) => {
  return (
    <div className="outer">
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Favorite Color: {favoriteColor}</p>
    </div>
  );
};

export default User;
