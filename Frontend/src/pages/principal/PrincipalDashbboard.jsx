import React from "react";
import Cards from "../../components/principal/Cards";

const PrincipalDashboard = () => {
  return (
    <div className="min-h-[90vh] w-full bg-[#181924] px-8 py-6 text-gray-300 overflow-y-auto">
      {/* <h1 className="text-2xl mb-5 mx-2">Principal Dashboard</h1> */}
      <Cards />
    </div>
  );
};

export default PrincipalDashboard;
