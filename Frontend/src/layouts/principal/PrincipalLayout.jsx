import React from "react";
import PrincipalNavbar from "../../components/principal/PrincipalNavbar";
import { Outlet } from "react-router-dom";
import PrincipalSidebar from "../../components/principal/PrincipalSidebar";

const PrincipalLayout = () => {
  return (
    <div className="min-h-[100vh] max-w-[100vw] bg-[#1B1D28] flex flex-col">
      {/* Navbar */}
      <PrincipalNavbar />

      {/* Main content area */}
      <div className="flex flex-1 gap-10">
        {/* Sidebar */}
        <div className="h-[calc(100vh-64px)] overflow-auto scrollbar-hide">
          <PrincipalSidebar />
        </div>

        {/* Dashboard / Outlet */}
        <div className="flex-1 h-[calc(100vh-64px)] overflow-auto scrollbar-hide">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrincipalLayout;
