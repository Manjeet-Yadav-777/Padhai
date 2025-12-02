import React from "react";
import { teachers } from "../../utils/Data";
import { useNavigate } from "react-router-dom";

const AllTeachers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 mb-8 px-5 items-center justify-items-start">
        <p className="text-xs font-bold">Name</p>
        <p className="text-xs font-bold">Teacher ID</p>
        <p className="text-xs font-bold">Subject</p>
        <p className="text-xs font-bold">Salary</p>
        <p className="text-xs font-bold">Acton</p>
      </div>

      {teachers.map((teacher) => {
        return (
          <div className="grid grid-cols-5 my-5 items-center shadow-lg bg-[#1B1C27] px-5 py-5 rounded-md">
            <p className="text-xs font-bold">
              {teacher.firstName + " " + teacher.lastName}
            </p>
            <p className="text-xs font-bold">{teacher.userId.slice(-4)}</p>
            <p className="text-xs font-bold">{teacher.subject}</p>
            <p className="text-xs font-bold">₹{teacher.salary.total}</p>
            <p
              onClick={() => navigate(`/principal/teacher/${teacher.userId}`)}
              className="text-sm bg-blue-500 w-fit px-5 py-1 font-bold rounded-sm hover:bg-blue-600 cursor-pointer"
            >
              View
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllTeachers;
