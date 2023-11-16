import React from "react";
import { Routes, Route } from "react-router-dom";
import { Team } from "./Team";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};
