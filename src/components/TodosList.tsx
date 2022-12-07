import { stringify } from "uuid";
import { ITodo } from "../models/ITodo";

interface IProps {
  todos: ITodo[] | undefined;
  deleteTask: (id: number) => void;
}

const TodosList: React.FC<IProps> = ({ todos, deleteTask }) => {
  return (
    <div className="flexbox container d-flex justify-content-center">
      <table className="table table-primary table-striped table-hover w-50">
        <thead className="table-dark sticky-top">
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Task</th>
            <th scope="col">Completed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo, i) => {
            return (
              <tr key={todo.id}>
                <th className="align-middle" scope="row">
                  {i + 1}
                </th>
                <td>{todo.title}</td>
                <td className="text-center align-middle">
                  {todo.completed ? (
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel"
                        value=""
                        aria-label="..."
                        defaultChecked
                      />
                    </div>
                  ) : (
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkboxNoLabel"
                        value=""
                        aria-label="..."
                      />
                    </div>
                  )}
                </td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    type="submit"
                    onClick={() => {
                      deleteTask(todo.id as number);
                    }}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodosList;
