import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Layout from "./layouts/principal/Layout";
import Dashboard from "./pages/principal/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/principal" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
