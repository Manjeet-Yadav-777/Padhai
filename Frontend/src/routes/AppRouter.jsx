import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/common/Login";
import PrincipalLayout from "../layouts/principal/principalLayout";
import PrincipalDashbboard from "../pages/principal/PrincipalDashbboard";
import PrincipalStudents from "../pages/principal/PrincipalStudents";
import PrincipalTeachers from "../pages/principal/PrincipalTeachers";
import StudentDetail from "../pages/principal/StudentDetail";
import TeacherDetails from "../pages/principal/TeacherDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/principal" element={<PrincipalLayout />}>
        <Route path="dashboard" element={<PrincipalDashbboard />} />
        <Route path="students" element={<PrincipalStudents />} />
        <Route path="teachers" element={<PrincipalTeachers />} />
        <Route path="student/:id" element={<StudentDetail />} />
        <Route path="teacher/:id" element={<TeacherDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
