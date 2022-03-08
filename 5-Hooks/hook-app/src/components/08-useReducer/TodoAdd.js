import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Añadir tarea</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Descripción de la tarea..."
          autoComplete="off"
          className="form-control"
          onChange={handleInputChange}
          value={description}
        />

        <div className="d-grid gap-2">
          <button
            className="btn btn-outline-primary mt-2 btn-block"
            type="submit"
          >
            Añadir
          </button>
        </div>
      </form>
    </>
  );
};
