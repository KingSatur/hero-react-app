import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcHeroPage, MarvelHeroPage } from "../pages";
import { HeroDetailPage } from "../pages/HeroDetailPage";
import { SearchHeroPage } from "../pages/SearchHeroPage";

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelHeroPage />}></Route>
          <Route path="search" element={<SearchHeroPage />}></Route>
          <Route path="hero/:id" element={<HeroDetailPage />}></Route>
          <Route path="dc" element={<DcHeroPage />}></Route>
        </Routes>
      </div>
    </>
  );
};
