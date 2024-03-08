import React from "react";
import "../components/FirstComponent.css";

const users = [
  { name: "John", age: 25, favoriteColor: "blue" },
  { name: "Jane", age: 30, favoriteColor: "green" },
  { name: "Bob", age: 40, favoriteColor: "red" },
];

const ComponentArray: React.FC = () => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Favorite Color: {user.favoriteColor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentArray;
