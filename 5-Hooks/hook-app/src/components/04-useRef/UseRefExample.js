import React, { useState } from "react";
import "./focusScreen.css";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

export const UseRefExample = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>UseRefExample</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-primary mt-8"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
    </>
  );
};
