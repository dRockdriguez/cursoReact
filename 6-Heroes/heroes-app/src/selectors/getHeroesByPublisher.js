import { heroes } from "../data/heroes";
import { getValidPublishers } from "./getValidPublishers";

export const getHeroesByPublisher = (publisher) => {
  const publishers = getValidPublishers();

  if (!publishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
