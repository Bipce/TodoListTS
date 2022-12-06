import { ITodo } from "../models/ITodo";

interface IProps {
  todo: ITodo;
}

const TodoDetails: React.FC<IProps> = ({ todo }) => {
  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.completed ? "Completed" : "Not finish"}</p>
    </>
  );
};

export default TodoDetails;
