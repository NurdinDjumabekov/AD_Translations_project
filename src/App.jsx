import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/hoc/Layout";
import MainPage from "./pages/MainPage/MainPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CookiePage from "./pages/CookiePage/CookiePage";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import NotFound from "./pages/NotFound/NotFound";
import FreelancerPage from "./pages/FreelancerPage/FreelancerPage";
import ConsultationPage from "./pages/ConsultationPage/ConsultationPage";
import AdminPage from "./pages/admin/AdminPage/AdminPage";
import LayoutAdmin from "./components/hoc/LayoutAdmin";
import { useEffect } from "react";
import {
  toTakeAllDataServices,
  toTakeAllLang,
  toTakeIndustriesData,
} from "./store/reducers/servicesPageSlice";
import { useDispatch } from "react-redux";
import { toTakeDataUpdates } from "./store/reducers/mainPageSlice";
import { toTakeDataReviews, toTakeFAQ } from "./store/reducers/aboutPageSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeAllLang());
    dispatch(toTakeIndustriesData());
    dispatch(toTakeDataUpdates());
    dispatch(toTakeDataReviews());
    dispatch(toTakeFAQ());
    dispatch(toTakeAllDataServices());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/freelancer" element={<FreelancerPage />} />
          <Route path="/cookie" element={<CookiePage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
