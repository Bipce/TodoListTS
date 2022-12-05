import { ITodo } from "../models/ITodo";

interface IProps {
  todo: ITodo;
}

const TodoDetails: React.FC<IProps> = ({ todo }) => {
  console.log(todo);
  return <h1>yo</h1>;
};

export default TodoDetails;
