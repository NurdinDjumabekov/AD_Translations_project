import React, { useEffect } from "react";
import Services from "../../components/ServicesPage/Services/Services";
import SliderIndustries from "../../components/Sliders/SliderIndustries/SliderIndustries";
import Languages from "../../components/ServicesPage/Languages/Languages";
import { useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { preloader } = useSelector((state) => state.mainPageSlice);

  return (
    <div>
      <Services />
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <SliderIndustries />
          <Languages />
        </>
      )}
    </div>
  );
};

export default ServicesPage;
