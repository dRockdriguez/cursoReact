import "@testing-library/jest-dom";
import { getSaludo } from "../../base-pruebas/02-template-string";

describe("02-template-strings", () => {
  test("Should return the gretting to the name passed as argument", () => {
    const greeting = getSaludo("David");

    const expected = "Hola David";

    expect(greeting).toBe(expected);
  });

  test("Should return the gretting to the default name without arguments", () => {
    const greeting = getSaludo();

    const expected = "Hola Noname";

    expect(greeting).toBe(expected);
  });
});
