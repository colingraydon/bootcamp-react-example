interface ChildTextProps {
  count: number;
}

const ChildText: React.FC<ChildTextProps> = ({ count }) => {
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default ChildText;
