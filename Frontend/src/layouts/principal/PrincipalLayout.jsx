import React from "react";
import PrincipalNavbar from "../../components/principal/PrincipalNavbar";
import { Outlet } from "react-router-dom";
import PrincipalSidebar from "../../components/principal/PrincipalSidebar";

const PrincipalLayout = () => {
  return (
    <div className="min-h-[100vh] max-w-[100vw] bg-[#1B1D28]">
      <PrincipalNavbar />

      <div className="flex gap-10">
        <PrincipalSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default PrincipalLayout;
