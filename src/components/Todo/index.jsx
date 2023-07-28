import classNames from "classnames";
import styles from "./Todo.module.css";
import { Trash } from "@phosphor-icons/react";

export default function Todo({ todo, onDelete, onActive }) {
  const { id, title, active } = todo;
  const handleChange = (e) => {
    onActive({ ...todo, active: e.target.checked });
  };
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox}
        name="todo-check"
        checked={active}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={classNames(styles.todo__title, {
          [styles.todo__check]: active,
        })}
      >
        {title}
      </label>
      <button
        type="button"
        className={styles.btn__delete}
        onClick={handleDelete}
      >
        <Trash />
      </button>
    </li>
  );
}
