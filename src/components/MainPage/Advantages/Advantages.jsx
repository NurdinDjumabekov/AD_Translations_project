import React from "react";
import styles from "./Advantages.module.css";
import { useNavigate } from "react-router-dom";
import { AdvantagesData } from "../../../localData/data";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__inner}>
          <h2 className="standartTitle">{t("Our Advantages")}</h2>
          <ul className={styles.advantages__content}>
            {AdvantagesData?.map((item) => (
              <li key={item.id}>
                <div>
                  <span>0{item.id}</span>
                </div>
                <div>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.lineBlock}></div>
      <button className="standartBtn" onClick={() => navigate("/order")}>
        {t("btn_Advantages")}
      </button>
    </div>
  );
};

export default Advantages;
