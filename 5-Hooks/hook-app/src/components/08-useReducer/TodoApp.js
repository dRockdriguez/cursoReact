import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

    const action = {
      type: "ADD",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  const deleteTodo = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };

    dispatch(action);
  };
  return (
    <>
      <h1>
        Todo APP <small>({todos.length})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flash">
            {todos.map(({ id, description, done }, index) => (
              <li className="list-group-item" key={id}>
                <p className="text-center">
                  {index + 1}. {description}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </>
  );
};
