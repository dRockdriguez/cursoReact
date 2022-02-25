import React, { useEffect, useState } from "react";
import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("FormState changed");
  }, [formState]);

  useEffect(() => {
    console.log("Name changed");
  }, [name]);

  useEffect(() => {
    console.log("Email changed");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Use effect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        {name === "123" && <Message />}
      </div>
    </>
  );
};
