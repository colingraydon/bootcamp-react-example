interface TodoItemProps {
  index: number;
  title: string;
  handleComplete: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  index,
  title,
  handleComplete,
}) => {
  return (
    <div>
      <div>{title}</div>
      <button onClick={() => handleComplete(index)}>remove</button>
    </div>
  );
};

export default TodoItem;
