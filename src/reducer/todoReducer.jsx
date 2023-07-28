export function todoReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { todo } = action;
      return [...todos, todo];
    }
    case "delete": {
      const { todo } = action;
      return [...todos].filter(({ id }) => id !== todo.id);
    }
    case "actived": {
      const { todo } = action;
      return [...todos].map((item) => (item.id === todo.id ? todo : item));
    }
    default: {
      throw Error(`알수없는 액션 타입입니다: ${action.type}`);
    }
  }
}
