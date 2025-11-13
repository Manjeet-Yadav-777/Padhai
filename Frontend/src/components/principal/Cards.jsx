import { GraduationCap, User } from "lucide-react";
import React from "react";

const Cards = () => {
  return (
    <div className="min-h-[90vh] w-full bg-[#181924] text-gray-300 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="h-40 bg-[#1B1D28] rounded-xl px-8 py-5 flex flex-col gap-8">
          <h1 className="text-4xl flex items-center gap-3">
            {" "}
            <User size={36} /> Total Students
          </h1>
          <span className="text-3xl">69</span>
        </div>
        <div className="h-40 bg-[#1B1D28] rounded-xl px-8 py-5 flex flex-col gap-8">
          <h1 className="text-4xl flex items-center gap-3">
            <GraduationCap size={36} /> Total Students
          </h1>
          <span className="text-3xl">6969</span>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cards;
