import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  UserCheck,
  BookOpen,
  Settings,
  FileChartLine,
  DollarSign,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/principal/dashboard", icon: Home },
    { name: "Students", path: "/principal/students", icon: Users },
    { name: "Teachers", path: "/principal/teachers", icon: UserCheck },
    { name: "Classes", path: "/principal/classes", icon: BookOpen },
    { name: "Attendance", path: "/principal/attendance", icon: ClipboardList },
    { name: "Exams", path: "/principal/exams", icon: FileChartLine },
    { name: "Fees", path: "/principal/fees", icon: DollarSign },
    { name: "Reports", path: "/principal/reports", icon: FileChartLine },
    { name: "Settings", path: "/principal/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-3 left-0 z-50 text-gray-200 p-2"
      >
        {open ? null : <Menu size={26} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-200 
        border-r border-gray-800 flex flex-col transition-all duration-300
        ${collapsed ? "w-20" : "w-64"} min-h-screen
        fixed md:relative z-40 md:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && (
            <h2 className="text-lg font-semibold tracking-wide text-gray-300">
              📘 Menu
            </h2>
          )}
          <div className="flex items-center gap-2">
            {/* Collapse button (desktop) */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden md:block text-gray-400 hover:text-white transition"
            >
              {collapsed ? <Menu size={22} /> : <X size={22} />}
            </button>

            {/* Close button (mobile) */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-gray-400 hover:text-white transition"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Menu */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {menu.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setOpen(false)} // mobile close on click
              className={({ isActive }) =>
                `flex items-center ${
                  collapsed ? "justify-center" : "justify-start"
                } gap-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white border-l-4 border-blue-500"
                    : "hover:bg-gray-800 hover:text-gray-100"
                }`
              }
            >
              <Icon size={collapsed ? 26 : 22} />
              {!collapsed && (
                <span className="font-medium text-sm">{name}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
