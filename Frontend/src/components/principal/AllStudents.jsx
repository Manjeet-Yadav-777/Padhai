import React from "react";
import { students } from "../../utils/Data";
import { useNavigate } from "react-router-dom";

const AllStudents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 mb-8 px-5 items-center justify-items-start">
        <p className="text-xs font-bold">Name</p>
        <p className="text-xs font-bold">Roll Number</p>
        <p className="text-xs font-bold">Class</p>
        <p className="text-xs font-bold">Addmission Date</p>
        <p className="text-xs font-bold">Acton</p>
      </div>

      {students.map((student) => {
        return (
          <div className="grid grid-cols-5 my-5 items-center shadow-lg bg-[#1B1C27] px-5 py-5 rounded-md">
            <p className="text-xs font-bold">
              {student.firstName + " " + student.lastName}
            </p>
            <p className="text-xs font-bold">{student.rollNumber}</p>
            <p className="text-xs font-bold">{student.classId}</p>
            <p className="text-xs font-bold">{student.addmissionDate}</p>
            <p
              onClick={() => navigate(`/principal/student/${student._id}`)}
              className="text-sm bg-[#26d2d9] text-black w-fit px-5 py-1 font-bold rounded-sm hover:bg-[#06f2f9] cursor-pointer"
            >
              View
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllStudents;
