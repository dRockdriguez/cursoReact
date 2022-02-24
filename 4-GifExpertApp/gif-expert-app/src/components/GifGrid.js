import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifDetail from "./GifDetail";
import 'animate.css';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3> 
      {loading ? (
        <p>Cargando...</p>
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid;
