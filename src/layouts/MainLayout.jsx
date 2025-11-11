import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Pages where we don't want header/footer
  const noHeaderFooterRoutes = [
    "/login",
    "/register",
    "/forgetpass",
    "/resetpass",
    "/verify-account",
  ];

  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100">
      {!hideHeaderFooter && <Header />}
      

      <main className="flex-grow-1">
        <Outlet />
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
