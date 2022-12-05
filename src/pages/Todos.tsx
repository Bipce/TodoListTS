import TodosList from "../components/TodosList";
import { useContext, useEffect, useState } from "react";
import { getTodos } from "../services/getTodos";
import { ITodo } from "../models/ITodo";

import "./Todos.css";
import { TodoContext } from "../contexts/TodoContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    todoContext.addTask(title);
  };

  return (
    <>
      <div className="top-page">
        <h1>To do list</h1>
        <form className="add-todo" onSubmit={addTask}>
          <input
            type="text"
            name="add-todo"
            id="add-todo__input"
            placeholder="Task"
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>

      <div className="scroll-container">
        <TodosList todos={todoContext.todos} />;
      </div>
    </>
  );
};

export default Todos;
