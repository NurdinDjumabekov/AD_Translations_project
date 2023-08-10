import React from "react";
import styles from "./MainPage.module.css";
import Updates from "../../components/MainPage/Updates/Updates";
import Offers from "../../components/MainPage/Offers/Offers";
import Advantages from "../../components/MainPage/Advantages/Advantages";
import Header from "../../components/MainPage/Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Updates />
      <Offers />
      <Advantages />
    </div>
  );
};

export default MainPage;
