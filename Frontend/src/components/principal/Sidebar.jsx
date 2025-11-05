import { NavLink } from "react-router-dom";
import { Home, Users, BookOpen, Settings } from "lucide-react";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      path: "/principal/dashboard",
      icon: <Home size={20} />,
    },
    {
      name: "Students",
      path: "/principal/students",
      icon: <Users size={20} />,
    },

    {
      name: "Teachers",
      path: "/principal/teachers",
      icon: <BookOpen size={20} />,
    },
    {
      name: "Classes",
      path: "/principal/classes",
      icon: <BookOpen size={20} />,
    },

    {
      name: "Add Students",
      path: "/principal/addstudent",
      icon: <Users size={20} />,
    },

    {
      name: "Add Teachers",
      path: "/principal/addteachers",
      icon: <BookOpen size={20} />,
    },

    {
      name: "Settings",
      path: "/principal/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="bg-linear-to-b from-gray-900 via-black to-gray-900 text-gray-200 w-60 min-h-screen p-5 flex flex-col border-r border-gray-800 shadow-lg">
      <h2 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-3 tracking-wide text-gray-300">
        📘 Menu
      </h2>

      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-linear-to-r from-gray-700 to-gray-600 text-white shadow-md"
                  : "hover:bg-gray-800 hover:text-gray-100"
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
