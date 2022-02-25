import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const FormCustomHook = () => {
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  useEffect(() => {
    console.log("El email ha cambiado");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Use effect custom hook</h1>
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
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};
