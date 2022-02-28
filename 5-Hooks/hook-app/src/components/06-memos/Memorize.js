import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h2>Counter</h2>
      <Small value={counter} />
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button className="btn btn-primary ms-3" onClick={() => setShow(!show)}>Show/hide {JSON.stringify(show)}</button>
    </>
  );
};
