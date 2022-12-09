import { heros } from "../data/hero";

export const getHeroById = function (id) {
  return heros.find((hero) => hero.id === id);
};
