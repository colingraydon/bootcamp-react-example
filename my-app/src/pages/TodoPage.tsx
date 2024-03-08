import { useState } from "react";
import Navbar from "../components/Navbar";

const TodoPage: React.FC = () => {
  const useTodo = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
      setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    };

    return { todos, addTodo, removeTodo };
  };

  const { todos, addTodo, removeTodo } = useTodo();
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <Navbar />
      <h1>Todo Page</h1>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
