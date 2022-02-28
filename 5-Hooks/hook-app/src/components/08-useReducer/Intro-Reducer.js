const initialState = [
  {
    id: 1,
    todo: "Aprender react",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type) {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

console.table(todos);

const newTodo = {
  id: 2,
  todo: "Aprender vue",
  done: false,
};

const action = {
  type: "ADD",
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.table(todos);
