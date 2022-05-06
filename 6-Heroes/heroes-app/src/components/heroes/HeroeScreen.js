import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroeScreen = () => {
  const { id: heroeId, publisher: publisherURL } = useParams();

  const navigate = useNavigate();

  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (!heroe) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    heroe;

  const path = `/assets/heroes/${id}.jpg`;

  const handleReturn = () => {
    navigate(`/${publisherURL}`);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={path} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>Primera aparición: </b> {first_appearance}
          </li>
        </ul>

        <div className="mt-3 ms-3">
          <h5>Personajes</h5>
          <p>{characters}</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
