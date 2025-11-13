import React, { useState } from "react";
import { useUser } from "../../context/userContext";

const Login = () => {
  const { login } = useUser();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161721] text-gray-100">
      <div className="bg-[#1B1C28] px-10 py-14 lg:p-14 rounded-xl shadow-2xl w-full lg:max-w-lg max-w-md transition-all duration-300">
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-3xl text-gray-400 tracking-wide">Gurukul MIS</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 bg-[#1C1D28]">
          <div>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 outline-none rounded-lg border border-gray-600 bg-[#1b1c28]"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 outline-none rounded-lg border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3262CF] py-3 cursor-pointer mt-4 rounded-md text-xl text-gray-200 font-semibold"
          >
            Login
          </button>
          <p className="text-center text-gray-500 text-sm">
            don't have credentials Get your credentials from admin
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
