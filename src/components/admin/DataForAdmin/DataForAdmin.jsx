import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "../../hoc/LayoutAdmin";
import AdminPage from "../../../pages/admin/AdminPage/AdminPage";
import NotFound from "../../../pages/NotFound/NotFound";

const DataForAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DataForAdmin;
