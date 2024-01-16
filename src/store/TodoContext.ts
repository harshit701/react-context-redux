import { createContext } from "react";
import { Todo } from "../model/todo";

type TodoContextObj = {
  todos: Todo[];
  addTodos: (title: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodoContextObj>({
  todos: [],
  addTodos: () => {},
  removeTodo: () => {},
});
