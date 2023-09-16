import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div>
            <h1>{t("header")}</h1>
            <p>{t("headerDescription")}</p>
            <button onClick={() => navigate("/order")}>{t("headerBtn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
