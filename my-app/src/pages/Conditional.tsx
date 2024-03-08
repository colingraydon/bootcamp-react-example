const Conditional: React.FC = () => {
  const isTrue = false;
  return <div>{isTrue ? <p>It's true!</p> : <p>It's false!</p>}</div>;
};

export default Conditional;
