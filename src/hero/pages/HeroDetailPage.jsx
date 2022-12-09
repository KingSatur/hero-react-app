import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroDetailPage = () => {
  const { id: heroId = "" } = useParams();

  const navigate = useNavigate();

  const heroData = useMemo(() => getHeroById(heroId), [heroId]);

  const handleBack = () => {
    navigate("/dc");
  };

  if (!heroData) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          className="img-thumbnail"
          alt={heroData?.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{heroData?.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {heroData?.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {heroData?.publisher}
          </li>
          <li className="list-group-item">
            <b>First appareance:</b> {heroData?.first_appearance}
          </li>
        </ul>
        <h5 className="mt-5">Characters</h5>
        <p>{heroData?.characters}</p>

        <button className="btn btn-outline-info" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};
