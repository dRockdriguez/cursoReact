export const todoReducer = (state = [], action) => {
  if (action) {
    const { type, payload } = action;

    switch (type) {
      case "ADD":
        return [...state, payload];
      case "DELETE":
        return state.filter((todo) => todo.id !== payload);
      case "TOGGLE":
        return state.map((todo) =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo
        );
      default:
        return state;
    }
  }
  return [];
};
