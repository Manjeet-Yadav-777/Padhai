import { LogOut } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const PrincipalNavbar = () => {
  return (
    <nav className="bg-[#1B1C27] text-gray-200 flex px-14 justify-between items-center h-[10vh]">
      <h1 className="text-2xl font-semibold">Gurukul</h1>

      <Link className="bg-red-500 hover:scale-[1.03] transition-all font-semibold px-7 py-2 rounded-md text-gray-100 flex items-center gap-3">
        Logout{" "}
        <span>
          <LogOut size={20} />
        </span>
      </Link>
    </nav>
  );
};

export default PrincipalNavbar;
