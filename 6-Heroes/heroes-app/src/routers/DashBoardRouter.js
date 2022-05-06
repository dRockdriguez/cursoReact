import React from "react";
import { Routes, Route } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";
import { HeroeScreen } from "../components/heroes/HeroeScreen";

export const DashBoardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path=":publisher/heroe/:id" element={<HeroeScreen />} />
        </Routes>
      </div>
    </>
  );
};
