import React from "react";

export const TodoListItem = ({ todo, index, toggleState, deleteTodo }) => {
  const { id, done, description } = todo;
  
  return (
    <>
      <li className="list-group-item" key={id}>
        <p
          className={`${done ? "complete" : ""}`}
          onClick={() => toggleState(id)}
        >
          {index + 1}. {description}
        </p>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
          Borrar
        </button>
      </li>
    </>
  );
};
