import React, { useEffect } from "react";
import styles from "./MainPage.module.css";
import Offers from "../../components/MainPage/Offers/Offers";
import Advantages from "../../components/MainPage/Advantages/Advantages";
import Header from "../../components/MainPage/Header/Header";
import { useSelector } from "react-redux";
import SliderUpdates from "../../components/Sliders/SliderUpdates/SliderUpdates";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <SliderUpdates />
      <Offers />
      <Advantages />
    </>
  );
};

export default MainPage;
