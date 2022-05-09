import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("authReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const initialState = {
      logged: false,
    };
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("Debe autenticar y setear el usuario", () => {
    const initialState = {
      logged: false,
    };
    const loggedState = {
      name: "David",
      logged: true,
    };
    const action = {
      type: types.login,
      payload: loggedState,
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual(loggedState);
  });

  test("Debe hacer el logout", () => {
    const initialState = {
      logged: false,
    };
    const loggedState = {
      name: "David",
      logged: true,
    };
    const action = {
      type: types.logout,
      payload: loggedState,
    };
    const state = authReducer(loggedState, action);

    expect(state).toEqual(initialState);
  });
});
