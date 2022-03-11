import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginPage</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 1234,
            name: "David",
            email: "drock@usal.es",
          })
        }
      >
        Login
      </button>
    </div>
  );
};
