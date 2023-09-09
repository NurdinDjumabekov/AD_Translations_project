import React, { useEffect } from "react";
import styles from "./MainPage.module.css";
import Offers from "../../components/MainPage/Offers/Offers";
import Advantages from "../../components/MainPage/Advantages/Advantages";
import Header from "../../components/MainPage/Header/Header";
import { useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import SliderUpdates from "../../components/Sliders/SliderUpdates/SliderUpdates";
import { dataOffers } from "../../localData/data";

const MainPage = () => {
  const { preloader } = useSelector((state) => state.mainPageSlice);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <SliderUpdates />
          <Offers data={dataOffers} />
          <Advantages />
        </>
      )}
    </div>
  );
};

export default MainPage;
