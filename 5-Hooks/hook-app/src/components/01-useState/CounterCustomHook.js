import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1>Counter {state}</h1>
      <hr />

      <button className="btn" onClick={()=>increment(2)}>
        +1
      </button>

      <button className="btn" onClick={()=>decrement(6)}>
        -1
      </button>

      <button className="btn" onClick={reset}>Reset</button>
    </>
  );
};
