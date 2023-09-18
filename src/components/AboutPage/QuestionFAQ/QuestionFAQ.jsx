import React, { useEffect, useState } from "react";
import styles from "./QuestionFAQ.module.css";
import arrow from "../../../assets/images/aboutPage/arrow.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeDataFAQ } from "../../../store/reducers/aboutPageSlice";
import { useTranslation } from "react-i18next";

const QuestionFAQ = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { dataFAQ } = useSelector((state) => state.aboutPageSlice);

  const lookAnswer = (id, bool) => {
    const newArr = dataFAQ?.map((item) =>
      item.id === id ? { ...item, bool: !item.bool } : item
    );
    dispatch(changeDataFAQ(newArr));
  };

  return (
    <div className={styles.question}>
      <div className="container">
        <h4 className="standartTitle">{t("FAQ")}</h4>
        <div className={styles.question__inner}>
          {dataFAQ?.map((item) => (
            <div key={item.id} onClick={() => lookAnswer(item.id, item.bool)}>
              <div>
                <p>{item.question}</p>
                <button className={item.bool ? styles.activeBtn : ""}>
                  <img src={arrow} alt="^" />
                </button>
              </div>
              {item.bool && <span>{item.answer}</span>}
            </div>
          ))}
        </div>
        <button className="standartBtn" onClick={() => navigate("/order")}>
          {t("FAQ_btn")}
        </button>
      </div>
    </div>
  );
};

export default QuestionFAQ;
