import { heros } from "../data/hero";

export const getHerosBySearch = function (search) {
  search = search?.toLocaleLowerCase().trim();
  if (search.length === 0) {
    return [];
  }

  return heros.filter((hero) =>
    hero.superhero?.toLocaleLowerCase().includes(search)
  );
};
