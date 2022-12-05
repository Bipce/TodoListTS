import axios from "axios";
import { ITodo } from "../models/ITodo";

export const getTodos = async (): Promise<ITodo[]> => {
  const res = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

  return res.data;
};

export const getTodo = async (id: string): Promise<ITodo> => {
  const res = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.data;
};
