import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-bg-secondary vh-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
