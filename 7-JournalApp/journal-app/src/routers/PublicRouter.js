import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/" /> : children;
};
