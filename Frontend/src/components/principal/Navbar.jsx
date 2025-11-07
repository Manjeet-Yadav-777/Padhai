import { useSelector } from "react-redux";
import { useAppContext } from "../../context/AppProvider";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  return (
    <nav className="bg-linear-to-r from-gray-900 via-black to-gray-900 text-gray-200 shadow-lg px-6 py-3 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
        🏫 SchoolMS
      </h1>

      <div className="flex items-center gap-5">
        {user ? (
          <>
            <span className="font-medium text-gray-300">
              👋 {user.username || "User"}
            </span>
            <button className="bg-linear-to-r from-gray-700 to-gray-600 text-white font-semibold px-4 py-1.5 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-200">
              Logout
            </button>
          </>
        ) : (
          <button className="bg-linear-to-r from-gray-700 to-gray-600 text-white font-semibold px-4 py-1.5 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-200">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
