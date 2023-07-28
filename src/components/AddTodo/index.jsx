import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdded }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAdded({ id: uuidv4(), title: title.trim(), active: false });
    setTitle("");
  };

  const handleEnter = (e) => {
    if (e.key !== "Enter") return;
    handleSubmit(e);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Add Todo"
        onKeyDown={handleEnter}
      />
      <button type="submit" className={styles.btn__add}>
        Add
      </button>
    </form>
  );
}
