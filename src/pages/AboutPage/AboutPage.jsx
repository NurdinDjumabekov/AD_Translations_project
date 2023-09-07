import React, { useEffect } from "react";
import AboutUs from "../../components/AboutPage/AboutUs/AboutUs";
import QuestionFAQ from "../../components/AboutPage/QuestionFAQ/QuestionFAQ";
import SliderReviews from "../../components/Sliders/SliderReviews/SliderReviews";
import { useDispatch } from "react-redux";

const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <SliderReviews />
      <QuestionFAQ />
    </div>
  );
};

export default AboutPage;
