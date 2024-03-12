import React, { useState } from "react";
import TodoItem from "../components/TodoItem";

const TodoPage: React.FC = () => {
  const useTodo = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (todo: string) => {
      setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
      setTodos(todos.filter((_, i) => index !== i));
    };

    return { todos, addTodo, removeTodo };
  };

  const { todos, addTodo, removeTodo } = useTodo();

  const [input, setInput] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    addTodo(input);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <p>add a todo!</p>
      <form>
        <input value={input} type="text" onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>
          add todo
        </button>
      </form>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          title={todo}
          handleComplete={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoPage;
