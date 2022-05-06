import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroeByName } from "../../selectors/getHeroesByName";
import { HeroeCard } from "../heroes/HeroeCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);
  const { searchText } = formValues;

  const heroes = [...getHeroeByName(q)];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Buscar</h1>

      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" && (
            <div className="alert alert-info">Aún no hay resultados</div>
          )}
          {heroes.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
