import React from "react";
import styles from "./GoodSendData.module.css";
import good from "../../assets/images/orderPage/good.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeGoodSendData } from "../../store/reducers/orderPageSlice";
import { useTranslation } from "react-i18next";

const GoodSendData = ({ text }) => {
  const dispatch = useDispatch();
  const closeBlock = () => {
    dispatch(changeGoodSendData(true));
  };
  const { t } = useTranslation();
  return (
    <div className={styles.goodSend}>
      <div>
        <div>
          <img src={good} alt="done!" />
        </div>
        <h2>{t("Great")}!</h2>
        <p>{text}</p>
        <NavLink onClick={closeBlock} className="standartBtn" to={"/"}>
          {t("Back to Home")}
        </NavLink>
      </div>
    </div>
  );
};

export default GoodSendData;
