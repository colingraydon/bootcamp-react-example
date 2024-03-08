import React from "react";
import useFetch from "../hooks/UseFetch";
import FetchComponent from "../components/FetchComponent";

const FetchPage: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      {Object.values(data as {}).map((post: any, index: number) => {
        return (
          <FetchComponent key={index} title={post.title} body={post.body} />
        );
      })}
    </div>
  );
};

export default FetchPage;
