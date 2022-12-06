import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {
  const todoContext = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length != 0) {
      todoContext.addTask(title);
    }

    e.currentTarget.reset();
  };
  return (
    <nav className="navbar navbar-dark bg-dark opacity-75">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Todo List
        </Link>
        <form className="d-flex" role="search" onSubmit={addTask}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Task"
            aria-label="Search"
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
