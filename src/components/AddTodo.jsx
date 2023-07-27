import { useState } from "react";

export default function AddTodo({ dispatch }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdded = () => {
    dispatch({ type: "added", title });
    setTitle("");
  };
  return (
    <div>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button type="button" onClick={handleAdded}>
        Add
      </button>
    </div>
  );
}
