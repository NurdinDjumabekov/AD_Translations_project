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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataServices } from "./store/reducers/servicesPageSlice";
import { dataMainPage } from "./store/reducers/mainPageSlice";
import { dataAboutPage } from "./store/reducers/aboutPageSlice";
import Preloader from "./components/Preloader/Preloader";
import DetailedPage from "./pages/DetailedPage/DetailedPage";

function App() {
  const dispatch = useDispatch();
  const { langData } = useSelector((state) => state.onServerSlice);
  const { preloader } = useSelector((state) => state.mainPageSlice);

  useEffect(() => {
    dispatch(dataMainPage({ url: "latest_updates/list", lang: langData }));
    dispatch(dataMainPage({ url: "our_offers/list", lang: langData }));
    dispatch(dataServices({ url: "services/list", lang: langData }));
    dispatch(dataServices({ url: "language/list", lang: langData }));
    dispatch(dataServices({ url: "industries/list", lang: langData }));
    dispatch(dataAboutPage({ url: "reviews/list", lang: langData }));
    dispatch(dataAboutPage({ url: "faq/list", lang: langData }));
  }, [langData]);

  return (
    <>
      {preloader && <Preloader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/freelancer" element={<FreelancerPage />} />
          <Route path="/detailed/:name/:id" element={<DetailedPage />} />
          <Route path="/cookie" element={<CookiePage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
