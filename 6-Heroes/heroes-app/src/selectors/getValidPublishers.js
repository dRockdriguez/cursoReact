import { validPublishers } from "../data/heroes";

export const getValidPublishers = () => {
  return Object.keys(validPublishers);
};
