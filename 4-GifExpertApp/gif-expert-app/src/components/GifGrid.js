import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifDetail from "./GifDetail";
import 'animate.css';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3> 
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="animate__animated animate__fadeIn">
          <ol className="card-grid">
            {gifs.map((img) => (
              <GifDetail key={`${img.id}${Date.now()}`} {...img} />
            ))}
          </ol>
        </div>
      )}
    </>
  );
};

export default GifGrid;
