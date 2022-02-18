import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("09-promesas", () => {
  test("Should return a hero by id", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe.id).toBe(id);
      done();
    });
  });

  test("Should return undefined when id not exists", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
