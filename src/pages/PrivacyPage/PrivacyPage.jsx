import React, { useEffect } from "react";
import styles from "./PrivacyPage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";
import { privacyPageData } from "../../localData/data";
import { useTranslation } from "react-i18next";

const PrivacyPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.privacyPage}>
      <div className="container">
        <div className="addBlockNav">
          <NavLink to={"/"} className="prevPage">
            {t("Home")}
          </NavLink>
          <img className="arrowPage" src={arrow} alt="" />
          <NavLink className="nextPage">{t("Privacy Policy")}</NavLink>
        </div>
        <h2>{t("Privacy Policy")}</h2>
        {privacyPageData?.map((item) => (
          <div key={item.id}>
            <h3>{t(item.title)}</h3>
            <p>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPage;
