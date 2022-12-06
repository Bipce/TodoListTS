import TodosList from "../components/TodosList";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Home = () => {
  const todoContext = useContext(TodoContext);

  return (
    <div className="scroll-container mt-2">
      <TodosList todos={todoContext.todos} />;
    </div>
  );
};

export default Home;
