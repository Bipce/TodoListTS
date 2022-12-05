import React, { createContext, useEffect, useState } from "react";
import { ITodo } from "../models/ITodo";
import { getTodos } from "../services/getTodos";
import { v4 as uuid } from "uuid";

interface Props {
  todos: ITodo[] | undefined;
  addTask: (title: string) => void;
}

export const TodoContext = createContext<Props>({} as Props);

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>();

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      setTodos(data);
    })();
  }, []);

  const addTask = (title: string) => {
    const newTodo: ITodo = {
      id: uuid(),
      title,
      completed: false,
    };

    const tmp = [...(todos || []), newTodo];

    setTodos(tmp);
  };

  return <TodoContext.Provider value={{ todos, addTask }}>{children}</TodoContext.Provider>;
};
