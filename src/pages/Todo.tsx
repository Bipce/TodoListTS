import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoDetails from "../components/TodoDetails";
import { ITodo } from "../models/ITodo";
import { getTodo } from "../services/getTodos";

const Todo = () => {
  const [todo, setTodo] = useState<ITodo>();

  const { id } = useParams<{ id: string }>();

  if (id == undefined) return null;

  useEffect(() => {
    (async () => {
      setTodo(await getTodo(id));
    })();
  }, []);

  if (!todo) return null;

  return <TodoDetails todo={todo} />;
};

export default Todo;
