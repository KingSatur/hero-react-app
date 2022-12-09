import { HeroList } from "../components/HeroList";

export const MarvelHeroPage = () => {
  return (
    <div aria-label="marvel-page" className="pt-5">
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
