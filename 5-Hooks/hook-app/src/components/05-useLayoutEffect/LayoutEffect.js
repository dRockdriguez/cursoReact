import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { loading, data } = state;
  const { quote } = data ? data[0] : { undefined };

  const pQuote = useRef();
  useLayoutEffect(() => {
    if (pQuote.current) setBoxSize(pQuote.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout Effect Breaking bad</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p ref={pQuote}>{quote}</p>
        </blockquote>
      )}

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente
      </button>
    </>
  );
};
