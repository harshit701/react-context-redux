import { FC, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../../store/TodoContext";

const Todos: FC = () => {
  const { todos } = useContext(TodosContext);
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} id={todo.id} />
      ))}
    </>
  );
};

export default Todos;
