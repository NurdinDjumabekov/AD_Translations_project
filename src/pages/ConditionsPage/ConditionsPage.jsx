import React, { useEffect } from "react";
import styles from "./ConditionsPage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ConditionsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.conditionsPage}>
      <div className="container">
        <div className="addBlockNav">
          <NavLink to={"/"} className="prevPage">
            {t("Home")}
          </NavLink>
          <img className="arrowPage" src={arrow} alt="" />
          <NavLink className="nextPage">{t("Terms and Conditions")}</NavLink>
        </div>
        <h2>{t("Terms and Conditions")}</h2>
        <p>{t("text1_conditions")}</p>
        <h3>{t("For the purposes of this Agreement")}</h3>
        <p>{t("text2_conditions")}</p>
        <p>{t("text3_conditions")}</p>
      </div>
    </div>
  );
};

export default ConditionsPage;
