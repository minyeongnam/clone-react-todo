export default function TodoListItem({ id, title, check, onDelete }) {
  return (
    <li>
      <input type="checkbox" name="todo-check" value={check} />
      <span>{title}</span>
      <button type="button" onClick={() => onDelete(id)}>
        삭제
      </button>
    </li>
  );
}
