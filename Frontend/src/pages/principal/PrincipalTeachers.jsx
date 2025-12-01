import React from "react";
import AllTeachers from "../../components/principal/AllTeachers";

const PrincipalTeachers = () => {
  return (
    <div className="min-h-[90vh] w-full bg-[#181924] px-18 py-6 text-gray-300 overflow-y-auto">
      <div className="flex justify-between  items-center mb-10">
        <h2 className="text-3xl">All Teachers</h2>

        <button className="bg-blue-500 px-7 text-sm py-3 mr-14 cursor-pointer rounded-md font-bold hover:bg-blue-600">
          ADD TEACHER
        </button>
      </div>

      <AllTeachers />
    </div>
  );
};

export default PrincipalTeachers;
