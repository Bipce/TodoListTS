import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoContextProvider } from "./contexts/TodoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
