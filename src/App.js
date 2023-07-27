import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { todoReducer } from "./reducer/todoReducer";

function App() {
  const [todo, dispatch] = useReducer(todoReducer, [
    {
      id: 1,
      title: "장보기",
      check: false,
    },
  ]);
  return (
    <div className="App">
      <TodoList data={todo} dispatch={dispatch} />
      <AddTodo dispatch={dispatch} />
    </div>
  );
}

export default App;
