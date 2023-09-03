import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../admin/MenuBar/MenuBar";

const LayoutAdmin = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
