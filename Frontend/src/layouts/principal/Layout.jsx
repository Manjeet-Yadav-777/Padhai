import { Outlet } from "react-router-dom";
import Navbar from "../../components/principal/Navbar";
import Sidebar from "../../components/principal/Sidebar";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col bg-linear-to-br from-black via-gray-900 to-blue-900 text-gray-200">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 p-6 overflow-y-auto bg-linear-to-br from-gray-900 via-black to-gray-800 shadow-lg border-l border-gray-700">
          <Outlet /> {/* Page content */}
        </main>
      </div>
    </div>
  );
}
