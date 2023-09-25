import React, { useEffect } from "react";
import Services from "../../components/ServicesPage/Services/Services";
import SliderIndustries from "../../components/Sliders/SliderIndustries/SliderIndustries";
import Languages from "../../components/ServicesPage/Languages/Languages";
import { useDispatch, useSelector } from "react-redux";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Services />
      <SliderIndustries />
      <Languages />
    </div>
  );
};

export default ServicesPage;
