import React from "react";

interface FetchComponentProps {
  title: string;
  body: string;
}

const FetchComponent: React.FC<FetchComponentProps> = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default FetchComponent;
