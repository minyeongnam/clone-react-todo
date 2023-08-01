export function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { todo } = action;
      const newTodos = [...todos, todo];
      localStorage.todos = JSON.stringify(newTodos);
      return newTodos;
    }
    case "delete": {
      const { todo } = action;
      const newTodos = [...todos].filter(({ id }) => id !== todo.id);
      localStorage.todos = JSON.stringify(newTodos);
      return newTodos;
    }
    case "actived": {
      const { todo } = action;
      const newTodos = [...todos].map((item) =>
        item.id === todo.id ? todo : item
      );
      localStorage.todos = JSON.stringify(newTodos);
      return newTodos;
    }
    case "setList": {
      const { todos } = action;
      localStorage.todos = JSON.stringify(todos);
      return todos;
    }
    default: {
      throw Error(`알수없는 액션 타입입니다: ${action.type}`);
    }
  }
}
