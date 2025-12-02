import { User, ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import { teachers } from "../../utils/Data";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const navigate = useNavigate();
  const data = useParams();
  console.log(data);

  let teacher;

  teachers.forEach((s) => {
    if (s.userId === data.id) {
      teacher = s;
    }
  });

  console.log(teacher);

  return (
    <div className="min-h-screen text-white px-10 bg-[#181924] py-5">
      <div className="flex justify-between pr-10">
        <h1 className="text-2xl font-bold">Teacher Details</h1>
        <p
          onClick={() => navigate("/principal/teachers")}
          className="flex items-center gap-1 text-xl hover:text-red-400 cursor-pointer"
        >
          Back <ArrowRight />
        </p>
      </div>
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
              {teacher.firstName + " " + teacher.lastName}
            </h1>
            <h1 className="text-2xl text-green-500 ">
              Teacher Id : {teacher.userId.slice(-4)}
            </h1>
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
              {teacher.dateOfBirth}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Gender : </span>
              {teacher.gender}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Contact : </span>
              {teacher.contactNumber}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Salary Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>BASIC : </span>₹{teacher.salary.basic}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>HRA : </span>₹{teacher.salary.hra}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>DA : </span>₹{teacher.salary.da}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400 text-green-400">
              <span>Total : </span>₹{teacher.salary.total}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Academic Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Subject : </span>
              {teacher.subject}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Joining Date : </span>
              {teacher.joinngDate}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Qualification : </span>
              {teacher.qualification}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Experience : </span>
              {teacher.experience}+ Years
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
              {teacher.address.street}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>City : </span>
              {teacher.address.city}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>State : </span>
              {teacher.address.state}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Pincode : </span>
              {teacher.address.pincode}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Country : </span>
              {teacher.address.country}
            </h1>
          </div>
        </div>

        <div className="bg-[#1B1C27] px-10 py-5 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-200">
            Salary Details
          </h1>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>BASIC : </span>₹{teacher.salary.basic}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>HRA : </span>₹{teacher.salary.hra}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>DA : </span>₹{teacher.salary.da}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400 text-green-400">
              <span>Total : </span>₹{teacher.salary.total}
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
              {teacher.address.street}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>City : </span>
              {teacher.address.city}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>State : </span>
              {teacher.address.state}
            </h1>
          </div>

          <div className="my-3">
            <h1 className="text-xl text-gray-400">
              <span>Pincode : </span>
              {teacher.address.pincode}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
