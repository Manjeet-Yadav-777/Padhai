import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, LayoutDashboard, User } from "lucide-react";

const PrincipalSidebar = () => {
  const [selected, setSelected] = useState(() => {
    return sessionStorage.getItem("selected") || 0;
  });

  const menuItems = [
    {
      name: "Dashboard",
      link: "/principal/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "Students", link: "/principal/students", icon: <User size={20} /> },
    {
      name: "Teachers",
      link: "/principal/teachers",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Classes",
      link: "/principal/classes",
      icon: <BookOpen size={20} />,
    },
  ];

  useEffect(() => {
    sessionStorage.setItem("selected", selected);
  }, [selected]);

  return (
    <div className="bg-[#181924] min-h-[90vh] min-w-64 text-gray-300 flex flex-col px-10 py-7 gap-2">
      {menuItems.map((item, idx) => {
        return (
          <Link
            onClick={() => setSelected(idx)}
            to={item.link}
            className={`py-2 text-lg px-5 flex items-center gap-2 ${
              selected == idx
                ? "bg-[#26d2d9] text-black  font-bold rounded-md"
                : ""
            }`}
          >
            <span>{item.icon}</span> {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default PrincipalSidebar;
