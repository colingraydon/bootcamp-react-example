interface ChildButtonProps {
  onClick: () => void;
}

const ChildButton: React.FC<ChildButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Click on me!!</button>;
};

export default ChildButton;
