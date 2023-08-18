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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/freelancer" element={<FreelancerPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
