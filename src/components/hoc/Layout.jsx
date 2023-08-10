import React from "react";
import Header from "../MainPage/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
