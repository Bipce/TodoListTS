import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoContextProvider } from "./contexts/TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_TODO_URL;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
