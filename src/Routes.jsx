import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AAA from "./AAA";
import BreakingBad from "./BreakingBad";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AAA />} />
        <Route path="/personagens" element={<BreakingBad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
