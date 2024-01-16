import { FC, useContext } from "react";
import { TodosContext } from "../../store/TodoContext";

const TodoItem: FC<{ title: string; id: string }> = ({ title, id }) => {
  const { removeTodo } = useContext(TodosContext);
  return <li onClick={() => removeTodo(id)}>{title}</li>;
};

export default TodoItem;
