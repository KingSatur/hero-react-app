import React from "react";
import { getHeroByPublisher } from "../helpers/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heros = getHeroByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heros?.map((hero) => (
        <HeroCard key={hero?.id} {...hero} />
      ))}
    </div>
  );
};
