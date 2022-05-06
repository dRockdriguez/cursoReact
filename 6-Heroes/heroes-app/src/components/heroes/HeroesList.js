import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroesList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} {...heroe}></HeroeCard>
      ))}
    </div>
  );
};
