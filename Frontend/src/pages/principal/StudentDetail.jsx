import { User } from "lucide-react";
import React, { useEffect } from "react";
import { students } from "../../utils/Data";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const data = useParams();
  let student;

  students.forEach((s) => {
    if (s._id === data.id) {
      student = s;
    }
  });

  console.log(student);

  return (
    <div className="min-h-screen text-white px-10 bg-[#181924] py-5">
      <h1 className="text-2xl font-bold">Student Details</h1>
      <div className="flex my-10 items-center gap-5 justify-between pr-10">
        <div className="flex items-center gap-10">
          <div className="h-[100px] w-[100px] rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2886/2886011.png"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold text-blue-300">
              {student.firstName + " " + student.lastName}
            </h1>
            <h1 className="text-2xl text-green-500 ">₹{student.fees}</h1>
          </div>
        </div>

        <div className="flex gap-5">
          <button className="bg-blue-500 px-10 py-2 font-bold rounded-sm cursor-pointer hover:bg-blue-600">
            Edit
          </button>
          <button className="bg-red-500 px-10 py-2 font-bold rounded-sm cursor-pointer hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>

      <div className="flex gap-5 flex-col mt-10">
        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Personal Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>DOB : </span>
              {student.dateOfBirth}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Roll Number : </span>
              {student.rollNumber}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Gender : </span>
              {student.gender}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Contact : </span>
              {student.contactNumber}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Academic Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Class : </span>
              {student.classId}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Addmission Date : </span>
              {student.addmissionDate}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Addmission Date : </span>
              {student.academicYear}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Address Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Street : </span>
              {student.address.street}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>City : </span>
              {student.address.city}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>State : </span>
              {student.address.state}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Pincode : </span>
              {student.address.pincode}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Country : </span>
              {student.address.country}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Parent Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Parent Name : </span>
              {student.parentsDetails.parentName}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Occupation : </span>
              {student.parentsDetails.occupation}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Contact : </span>
              {student.parentsDetails.contact}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Address Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Street : </span>
              {student.address.street}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>City : </span>
              {student.address.city}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>State : </span>
              {student.address.state}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Pincode : </span>
              {student.address.pincode}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
