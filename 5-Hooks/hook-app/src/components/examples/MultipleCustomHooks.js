import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./examples.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { loading, data } = state;
  const { author, quote } = data ? data[0] : { undefined };

  return (
    <>
      <h1>Breaking bad</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente
      </button>
    </>
  );
};
