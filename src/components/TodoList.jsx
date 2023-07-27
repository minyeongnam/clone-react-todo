import TodoListItem from "./TodoListItem";

export default function TodoList({ data: todo, dispatch }) {
  const handleDelete = (id) => {
    dispatch({ type: "delete", id });
  };

  return (
    <div className="todo-list">
      <ul>
        {todo.map((item) => (
          <TodoListItem
            key={`${item.id}${item.title}`}
            {...item}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
