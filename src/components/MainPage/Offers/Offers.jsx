import React from "react";
import styles from "./Offers.module.css";
import { dataOffers } from "../../../localData/data";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();

  const lookMoreData = (id) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          bool: !item.bool,
        };
      }
      return item;
    });
    setData(newArr);
  };

  return (
    <div className={styles.offers}>
      <h2 className="standartTitle">{t("Our offers")}</h2>
      <div className={styles.offers__inner}>
        {dataOffers?.map((card) => (
          <div
            className={card.bool ? styles.activeBlock : ""}
            key={card.id}
            onClick={() => lookMoreData(card.id)}
          >
            <div>
              <img src={card.img} alt="" />
            </div>
            <h4>{t(card.title)}</h4>
            <p className={styles.activeP}>{t(card.miniText)}</p>
          </div>
        ))}
      </div>
      <button className="standartBtn">{t("btn_our_offer")}</button>
    </div>
  );
};

export default Offers;
