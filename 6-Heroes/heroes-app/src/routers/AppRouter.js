import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRouter } from "./DashBoardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashBoardRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
