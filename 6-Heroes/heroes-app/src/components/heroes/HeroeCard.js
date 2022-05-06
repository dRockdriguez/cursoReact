import React from "react";
import { Link } from "react-router-dom";
import { validPublishers } from "../../data/heroes";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const path = `/assets/heroes/`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={`${path}${id}.jpg`}
              alt={superhero}
              className="card-img"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/${validPublishers[publisher]}/heroe/${id}`}>Más información</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
