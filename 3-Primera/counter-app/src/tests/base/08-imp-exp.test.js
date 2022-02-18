import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("08-imp-exp", () => {
  test("Should return a hero by id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    const { id: idHero, name } = hero;

    expect(idHero).toEqual(id);
    expect(name).not.toBeNull();
  });

  test("Should return undefined when id not exists", () => {
    const id = 1000;
    const hero = getHeroeById(id);

    expect(hero).toBeUndefined();
  });

  test("Should return a hero by owner", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).not.toBeNull();
    expect(heroes).not.toBeUndefined();
    expect(heroes.length).toBeGreaterThan(0);
    expect(heroes[0].owner).toBe(owner);
  });

  test("Should return empty array when owner not exists", () => {
    const owner = "notexists";
    const heroes = getHeroesByOwner(owner);
    
    expect(heroes).not.toBeNull();
    expect(heroes).not.toBeUndefined();
    expect(heroes.length).toBe(0);
  });
});
