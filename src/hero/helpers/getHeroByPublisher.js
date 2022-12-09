import { heros } from "../data/hero";

export const getHeroByPublisher = function (publisher) {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error("Invalid publisher");
  }

  return heros.filter((hero) => hero?.publisher === publisher);
};
