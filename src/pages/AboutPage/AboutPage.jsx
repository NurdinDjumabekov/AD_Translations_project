import React, { useEffect } from "react";
import AboutUs from "../../components/AboutPage/AboutUs/AboutUs";
import QuestionFAQ from "../../components/AboutPage/QuestionFAQ/QuestionFAQ";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutUs />
      <QuestionFAQ />
    </div>
  );
};

export default AboutPage;
