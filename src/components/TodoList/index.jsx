import { useEffect, useReducer } from "react";
import AddTodo from "../AddTodo";
import Todo from "../Todo";
import { todoReducer } from "../../reducer/todoReducer";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const handleAdded = (todo) => dispatch({ type: "added", todo });
  const handleDelete = (todo) => dispatch({ type: "delete", todo });
  const handleActive = (todo) => dispatch({ type: "actived", todo });

  useEffect(() => {
    if (localStorage.todos && localStorage.todos.length > 0) {
      dispatch({ type: "setList", todos: JSON.parse(localStorage.todos) });
    }
  }, []);

  return (
    <section className={styles.container}>
      <ul className={styles.todolist}>
        {todos
          .filter((todo) => {
            if (filter === "active") {
              return todo.active === false;
            }
            if (filter === "completed") {
              return todo.active === true;
            }
            return todo;
          })
          .map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onDelete={handleDelete}
              onActive={handleActive}
            />
          ))}
      </ul>
      <AddTodo onAdded={handleAdded} />
    </section>
  );
}
