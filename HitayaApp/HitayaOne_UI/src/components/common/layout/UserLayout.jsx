import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "./../../../context/ContextProvider.jsx";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../../user/Navbar.jsx";
import Footer from "../../user/Footer.jsx";

import LOGO from "../../../assets/images/logo512.png";

export default function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
