import React, { useRef } from "react";
import "./focusScreen.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Nombre..."
      />
      <button className="btn btn-outline-primary mt-3" onClick={handleFocus}>
        Focus
      </button>
    </>
  );
};
