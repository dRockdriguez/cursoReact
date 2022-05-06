import { heroes } from "../data/heroes";

export const getHeroeByName = (superhero = "") => {
  if (!superhero) {
    return [];
  }
  return heroes.filter((heroe) =>
    heroe.superhero.toLowerCase().includes(superhero.toLowerCase())
  );
};
