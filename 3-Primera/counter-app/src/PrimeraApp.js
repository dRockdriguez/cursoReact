import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subSaludo }) => {
  return (
    <>
      <h1>{ saludo }</h1>
      <p>{ subSaludo }</p>
    </>
  );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subSaludo: PropTypes.string
};

PrimeraApp.defaultProps = {
    subSaludo: "Esto es el subSaludo"
};

export default PrimeraApp;
