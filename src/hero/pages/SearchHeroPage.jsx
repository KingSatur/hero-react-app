import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import queryString from "query-string";
import { getHerosBySearch } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchHeroPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: q,
  });
  const heros = getHerosBySearch(String(q));

  const showSearch = q?.length === 0;
  const showError = q && q?.length > 0 && !heros.length;

  const onSearchSubmit = (e) => {
    e?.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Search hero"
              autoComplete="off"
              className="form-control"
              onChange={onInputChange}
              value={searchText}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            aria-label="no-heros"
            className="alert alert-primary animate__animated animate__fadeInRight"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            aria-label="no-heros-found"
            className="alert alert-danger animate__animated animate__fadeInRight"
            style={{ display: showError ? "" : "none" }}
          >
            There is not results with {q}
          </div>

          {heros?.map((hero) => (
            <HeroCard key={hero?.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
