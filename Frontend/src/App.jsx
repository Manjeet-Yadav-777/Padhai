import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Layout from "./layouts/principal/Layout";
import Dashboard from "./pages/principal/PrincipalDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import PrincipalStudents from "./pages/principal/PrincipalStudents";
import PrincipalTeachers from "./pages/principal/PrincipalTeachers";
import PrincipalClasses from "./pages/principal/PrincipalClasses";
import PrincipalAttendence from "./pages/principal/PrincipalAttendence";
import PrincipalExams from "./pages/principal/PrincipalExams";
import PrincipalFees from "./pages/principal/PrincipalFees";
import PrincipalReports from "./pages/principal/PrincipalReports";
import PrincipalSettings from "./pages/principal/PrincipalSettings";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        {/* Principal Pages */}

        <Route
          path="/principal"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="students"
            element={
              <ProtectedRoute>
                <PrincipalStudents />
              </ProtectedRoute>
            }
          />

          <Route
            path="teachers"
            element={
              <ProtectedRoute>
                <PrincipalTeachers />
              </ProtectedRoute>
            }
          />

          <Route
            path="classes"
            element={
              <ProtectedRoute>
                <PrincipalClasses />
              </ProtectedRoute>
            }
          />

          <Route
            path="attendance"
            element={
              <ProtectedRoute>
                <PrincipalAttendence />
              </ProtectedRoute>
            }
          />

          <Route
            path="exams"
            element={
              <ProtectedRoute>
                <PrincipalExams />
              </ProtectedRoute>
            }
          />

          <Route
            path="fees"
            element={
              <ProtectedRoute>
                <PrincipalFees />
              </ProtectedRoute>
            }
          />

          <Route
            path="reports"
            element={
              <ProtectedRoute>
                <PrincipalReports />
              </ProtectedRoute>
            }
          />

          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <PrincipalSettings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
