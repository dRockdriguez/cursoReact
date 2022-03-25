import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { todos as initialState } from "../../fixtures/demoTodos";

describe("todoReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const state = todoReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("Debe agregar  un todo", () => {
    const action = {
      type: "ADD",
      payload: {
        id: 2,
        desc: "second",
        done: false,
      },
    };

    const state = todoReducer(initialState, action);

    expect(state).toEqual([
      ...initialState,
      {
        id: 2,
        desc: "second",
        done: false,
      },
    ]);
  });

  test("Debe eliminar un todo", () => {
    const action = {
      type: "DELETE",
      payload: 1,
    };

    const state = todoReducer(initialState, action);

    expect(state).toEqual([]);
  });

  test("Debe cambiar el estado de un todo", () => {
    const action = {
      type: "TOGGLE",
      payload: 1,
    };

    const state = todoReducer(initialState, action);

    expect(state[0].done).toEqual(true);
  });
});
