import { ITodo } from "../models/ITodo";
import { Link } from "react-router-dom";
import "./TodosList.css";

interface IProps {
  todos: ITodo[] | undefined;
}

const TodosList: React.FC<IProps> = ({ todos }) => {
  return (
    <div className="todos-box">
      {todos?.map((todo) => {
        return (
          <div key={todo.id} className="todo">
            <Link to={`/todos/${todo.id}`}>
              <h1>{todo.title}</h1>
              <p>{todo.completed ? "Completed" : "Not finish"}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TodosList;
