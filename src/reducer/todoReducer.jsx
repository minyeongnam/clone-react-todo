export function todoReducer(todo, action) {
  switch (action.type) {
    case "added": {
      const { title } = action;
      return [...todo, { id: todo.length + 1, title, check: false }];
    }
    case "delete": {
      const { id } = action;
      return [...todo].filter(({ id: todoId }) => todoId !== id);
    }
    default: {
      throw Error(`알수없는 액션 타입입니다: ${action.type}`);
    }
  }
}
