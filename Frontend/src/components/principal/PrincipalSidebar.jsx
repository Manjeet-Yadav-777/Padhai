import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, LayoutDashboard, User } from "lucide-react";

const PrincipalSidebar = () => {
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

  return (
    <div className="bg-[#181924] min-h-[100vh] min-w-64 text-gray-300 flex flex-col px-10 py-10 gap-2">
      {menuItems.map((item) => {
        return (
          <Link to={item.link} className="py-2 text-lg flex items-center gap-2">
            <span>{item.icon}</span> {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default PrincipalSidebar;
