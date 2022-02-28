export const todoReducer = (state = [], action) => {
  if (action) {
    const { type, payload } = action;

    switch (type) {
      case "ADD":
        return [...state, payload];
      case "DELETE":
        return state.filter((todo) => todo.id !== payload);
      default:
        return state;
    }
  }
  return [];
};
