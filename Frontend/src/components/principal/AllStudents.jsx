import React from "react";

const AllStudents = () => {
  const students = [
    {
      name: "Manjeet Yadav",
      roll: 201,
      class: "10th",
      year: 2023,
    },
    {
      name: "Aryan Sharma",
      roll: 202,
      class: "10th",
      year: 2023,
    },
    {
      name: "Riya Verma",
      roll: 203,
      class: "10th",
      year: 2023,
    },
    {
      name: "Kunal Singh",
      roll: 204,
      class: "10th",
      year: 2023,
    },
    {
      name: "Sneha Gupta",
      roll: 205,
      class: "10th",
      year: 2023,
    },
    {
      name: "Vikram Saini",
      roll: 206,
      class: "10th",
      year: 2023,
    },
    {
      name: "Ananya Jain",
      roll: 207,
      class: "10th",
      year: 2023,
    },
    {
      name: "Harsh Raj",
      roll: 208,
      class: "10th",
      year: 2023,
    },
    {
      name: "Priya Mehta",
      roll: 209,
      class: "10th",
      year: 2023,
    },
    {
      name: "Raghav Chaudhary",
      roll: 210,
      class: "10th",
      year: 2023,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 mb-8 px-5 items-center justify-items-start">
        <p className="text-xs font-bold">Name</p>
        <p className="text-xs font-bold">Roll Number</p>
        <p className="text-xs font-bold">Class</p>
        <p className="text-xs font-bold">Addmission Year</p>
        <p className="text-xs font-bold">Acton</p>
      </div>

      {students.map((student) => {
        return (
          <div className="grid grid-cols-5 my-5 items-center shadow-lg bg-[#1B1C27] px-5 py-5 cursor-pointer rounded-md">
            <p className="text-xs font-bold">{student.name}</p>
            <p className="text-xs font-bold">{student.roll}</p>
            <p className="text-xs font-bold">{student.class}</p>
            <p className="text-xs font-bold">{student.year}</p>
            <p className="text-sm bg-blue-500 w-fit px-5 py-1 font-bold rounded-sm hover:bg-blue-600">
              View
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllStudents;
