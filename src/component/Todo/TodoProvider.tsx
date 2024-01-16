import { useState } from "react";
import { Todo } from "../../model/todo";
import data from "../../data";

const TODOS: Todo[] = data;

export const TodoProvider = () => {
  const [todos, setTodos] = useState(TODOS);

  const addTodos = (todoTitle: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title: todoTitle,
    };
    setTodos((pervTodos) => [newTodo, ...pervTodos]);
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  return { todos, addTodos, removeTodo };
};

export default TodoProvider;
