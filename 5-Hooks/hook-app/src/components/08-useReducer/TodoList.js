import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, toggleState, deleteTodo }) => {
  return (
    <>
      <ul className="list-group list-group-flash">
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={index}
            toggleState={toggleState}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
