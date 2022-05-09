import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
    
  return user.logged ? <Navigate to="/marvel" /> : children;
};
