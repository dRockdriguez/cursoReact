import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("05-funciones", () => {
  test("Should return an object getUser", () => {
    const user = getUser("David");

    const expected = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    expect(user).toEqual(expected);
  });

  test("Should return an object getUsuarioActivo", () => {
    const user = getUsuarioActivo("David");

    const expected = {
      uid: "ABC567",
      username: "David",
    };

    expect(user).toEqual(expected);
  });
});
