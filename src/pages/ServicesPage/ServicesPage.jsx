import React from "react";
import Services from "../../components/ServicesPage/Services/Services";
import SliderIndustries from "../../components/Sliders/SliderIndustries/SliderIndustries";
import Languages from "../../components/ServicesPage/Languages/Languages";

const ServicesPage = () => {
  return (
    <div>
      <Services />
      <SliderIndustries />
      <Languages />
    </div>
  );
};

export default ServicesPage;
