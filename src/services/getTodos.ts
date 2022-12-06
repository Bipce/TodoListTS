import axios from "axios";
import { ITodo } from "../models/ITodo";

export const getTodos = async (): Promise<ITodo[]> => {
  const res = await axios.get<ITodo[]>("/");

  return res.data;
};

export const getTodo = async (id: string): Promise<ITodo> => {
  const res = await axios.get<ITodo>(`/${id}`);
  return res.data;
};
