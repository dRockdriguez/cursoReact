import React from "react";

const GifDetail = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title} </p>
    </div>
  );
};

export default GifDetail;
