import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">titulo</p>
        <p className="journal__entry-content">Ullamco aliqua anim amet quis ipsum elit velit culpa.</p>
      </div>

      <div className="journal__entry-date">
          <span>Monday</span>
          <h4>24</h4>
      </div>
    </div>
  );
};
