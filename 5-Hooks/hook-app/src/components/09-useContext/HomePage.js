import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
