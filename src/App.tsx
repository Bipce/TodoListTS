import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Todos from "./pages/Todos";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/todos/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
