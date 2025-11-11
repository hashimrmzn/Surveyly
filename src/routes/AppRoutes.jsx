import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Components / Pages
import CreateAcount from "../components/CreateAcount";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import ForgetPass from "../components/ForgetPass";
import ResetPass from "../components/ResetPass";
import Home from "../pages/Home";
import VerifyAccount from "../components/VerifyAccoun";

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes are wrapped in MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CreateAcount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
