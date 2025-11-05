import React, { useState } from "react";
import { useAppContext } from "../context/AppProvider";

export default function LoginForm() {
  const { login } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-black via-gray-900 to-black px-4">
      <div className="w-full max-w-sm">
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
          <h2 className="text-center text-3xl font-semibold text-white mb-2 tracking-tight">
            Login
          </h2>
          <p className="text-center text-sm text-gray-400 mb-8">
            Enter your credentials to access the dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 rounded-lg bg-linear-to-r from-gray-100 via-gray-300 to-gray-400 text-gray-900 font-semibold py-2.5 shadow-lg hover:from-gray-300 hover:to-gray-200 hover:shadow-gray-400/40 transition-all duration-300 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-center text-gray-500 mt-6">
            if you don't have credentials contact Admin
          </p>
        </div>
      </div>
    </div>
  );
}
