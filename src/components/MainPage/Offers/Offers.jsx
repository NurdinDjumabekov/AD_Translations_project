import React, { useEffect, useRef, useState } from "react";
import styles from "./Offers.module.css";

const Offers = ({ data }) => {
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
      <h2 className="standartTitle">Our offers</h2>
      <div className={styles.offers__inner}>
        {data?.map((card) => (
          <div
            className={card.bool ? styles.activeBlock : ""}
            key={card.id}
            onClick={() => lookMoreData(card.id)}
          >
            <div>
              <img src={card.img} alt="" />
            </div>
            <h4>{card.title}</h4>
            <p className={styles.activeP}>{card.miniText}</p>
          </div>
        ))}
      </div>
      <button className="standartBtn">See All Services</button>
    </div>
  );
};

export default Offers;
