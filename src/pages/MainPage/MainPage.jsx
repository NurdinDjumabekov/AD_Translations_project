import React, { useEffect } from "react";
import styles from "./MainPage.module.css";
import Updates from "../../components/MainPage/Updates/Updates";
import Offers from "../../components/MainPage/Offers/Offers";
import Advantages from "../../components/MainPage/Advantages/Advantages";
import Header from "../../components/MainPage/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import { toTakeDataUpdates } from "../../store/reducers/mainPageSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeDataUpdates());
  }, []);
  const { preloader } = useSelector((state) => state.mainPageSlice);

  return (
    <div>
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Updates />
          <Offers />
          <Advantages />
        </>
      )}
    </div>
  );
};

export default MainPage;
