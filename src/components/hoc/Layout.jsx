import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Menu from "../AllMenu/Menu/Menu";
import MenuBurger from "../AllMenu/MenuBurger/MenuBurger";

const Layout = () => {
  return (
    <>
      <Menu />
      <MenuBurger />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
