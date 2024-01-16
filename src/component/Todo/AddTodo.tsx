import { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../../store/TodoContext";

const AddTodo = () => {
  const todoRef = useRef<HTMLInputElement>(null);
  const { addTodos } = useContext(TodosContext);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    addTodos(todoRef.current!.value);
    todoRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={todoRef} placeholder="Enter todo" />
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
