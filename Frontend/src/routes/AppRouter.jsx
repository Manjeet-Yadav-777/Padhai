import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/common/Login";
import PrincipalLayout from "../layouts/principal/principalLayout";
import PrincipalDashbboard from "../pages/principal/PrincipalDashbboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/principal" element={<PrincipalLayout />}>
        <Route path="dashboard" element={<PrincipalDashbboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
