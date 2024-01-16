import "./App.css";
import AddTodo from "./component/Todo/AddTodo";
import TodoProvider from "./component/Todo/TodoProvider";
import Todos from "./component/Todo/Todos";
import { TodosContext } from "./store/TodoContext";

const App = () => {
  const { todos, addTodos, removeTodo } = TodoProvider();
  return (
    <>
      <h1>Home Page</h1>
      <TodosContext.Provider value={{ todos: todos, addTodos, removeTodo }}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
};

export default App;
