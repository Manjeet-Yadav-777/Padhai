import React from "react";
import { teachers } from "../../utils/Data";

const AllTeachers = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 mb-8 px-5 items-center justify-items-start">
        <p className="text-xs font-bold">Name</p>
        <p className="text-xs font-bold">Roll Number</p>
        <p className="text-xs font-bold">Subject</p>
        <p className="text-xs font-bold">Salary</p>
        <p className="text-xs font-bold">Acton</p>
      </div>

      {teachers.map((student) => {
        return (
          <div className="grid grid-cols-5 my-5 items-center shadow-lg bg-[#1B1C27] px-5 py-5 rounded-md">
            <p className="text-xs font-bold">{student.name}</p>
            <p className="text-xs font-bold">{student.rollNumber}</p>
            <p className="text-xs font-bold">{student.subject}</p>
            <p className="text-xs font-bold">₹{student.salary}</p>
            <p className="text-sm bg-blue-500 w-fit px-5 py-1 font-bold rounded-sm hover:bg-blue-600 cursor-pointer">
              View
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllTeachers;
