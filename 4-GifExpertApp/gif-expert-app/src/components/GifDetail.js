import React from "react";
import PropTypes from 'prop-types';

const GifDetail = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title} </p>
    </div>
  );
};

GifDetail.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default GifDetail;
