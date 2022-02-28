import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(19);

  const increment = useCallback(
    (inc) => {
      setCounter((c) => c + inc);
    },
    [setCounter]
  );

  return (
    <>
      <h1>CallbackHook</h1>
      <h2>{counter}</h2>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
