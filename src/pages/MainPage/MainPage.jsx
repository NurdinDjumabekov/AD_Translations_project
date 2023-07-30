import React from "react";
import styles from "./MainPage.module.css";
import Header from "../../components/MainPage/Header/Header";
import Updates from "../../components/MainPage/Updates/Updates";
import Offers from "../../components/MainPage/Offers/Offers";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Updates />
      <Offers />
      <Footer />
    </div>
  );
};

export default MainPage;
