import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { LoginPage } from "../pages/LoginPage";
import { Productspage } from "../pages/Productspage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product" element={<Productspage />} />
    </Routes>
  );
};
