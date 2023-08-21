import React, { useEffect } from "react";
import AboutUs from "../../components/AboutPage/AboutUs/AboutUs";
import QuestionFAQ from "../../components/AboutPage/QuestionFAQ/QuestionFAQ";
import SliderReviews from "../../components/Sliders/SliderReviews/SliderReviews";
import { useDispatch } from "react-redux";
import {
  toTakeDataReviews,
  toTakeFAQ,
} from "../../store/reducers/aboutPageSlice";

const AboutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeDataReviews());
    dispatch(toTakeFAQ());
  }, []);
  return (
    <div>
      <AboutUs />
      <SliderReviews />
      <QuestionFAQ />
    </div>
  );
};

export default AboutPage;
