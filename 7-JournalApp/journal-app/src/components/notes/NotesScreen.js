import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <form className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__content-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happend today?"
          className="notes__content-textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen.jpg"
            alt="imagen"
          />
          "
        </div>
      </form>
    </div>
  );
};
