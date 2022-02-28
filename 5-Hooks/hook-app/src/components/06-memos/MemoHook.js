import React, { useMemo, useState } from "react";
import { bigProcess } from "../../helpers/bigProcess";
import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);



  const memoBigProcess = useMemo(() => {
    bigProcess(counter);
  }, [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <hr />
      <h2>Counter {counter} </h2>
      <p>{memoBigProcess}</p>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>

      <button className="btn btn-primary ms-3" onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
