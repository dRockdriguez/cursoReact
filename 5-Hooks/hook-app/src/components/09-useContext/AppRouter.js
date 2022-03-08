import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { NavBar } from "./NavBar";
import { NotFountPage } from "./NotFountPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="*" element={<NotFountPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
