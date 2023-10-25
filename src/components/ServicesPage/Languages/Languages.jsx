import React, { useEffect, useState } from "react";
import styles from "./Languages.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const navigate = useNavigate();
  const { allLang } = useSelector((state) => state.servicesPageSlice);

  const { t } = useTranslation();

  return (
    <div className={styles.languages}>
      <div className="container">
        <h4 className="standartTitle">{t("language")}</h4>
        <div className={styles.languages__inner}>
          {allLang?.map((lang) => (
            <NavLink
              key={lang.id}
              to={`/detailed/languages/${lang.id}`}
              className={styles.languages__innerBlock}
            >
              <img src={lang?.img} alt="none" />
              <p>{lang.name} </p>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="lineBlock"></div>
      <button className="standartBtn" onClick={() => navigate("/order")}>
        {t("btn_allLANG")}
      </button>
    </div>
  );
};

export default Languages;
