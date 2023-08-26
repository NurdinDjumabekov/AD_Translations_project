import React, { useEffect, useState } from "react";
import styles from "./LangSelectTo.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDataFreelancers_from,
  changeDataFreelancers_to,
} from "../../../store/reducers/freelanceSlice";

const LangSelectTo = ({ props }) => {
  const dispatch = useDispatch();
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState(props.initialText);
  const { dataFreelancers_from, dataFreelancers_to } = useSelector(
    (state) => state.freelanceSlice
  );

  useEffect(() => {
    if (props.count === 1) {
      if (props.type === "lang") {
        dispatch(
          changeDataFreelancers_to({
            ...dataFreelancers_to,
            langOne: {
              ...dataFreelancers_to.langOne,
              lang: choiceLang,
            },
          })
        );
      } else if (props.type === "level") {
        dispatch(
          changeDataFreelancers_to({
            ...dataFreelancers_to,
            langOne: {
              ...dataFreelancers_to.langOne,
              levelLang: choiceLang,
            },
          })
        );
      }
    }
    if (props.count === 2) {
      if (props.type === "lang") {
        dispatch(
          changeDataFreelancers_to({
            ...dataFreelancers_to,
            langTwo: {
              ...dataFreelancers_to.langTwo,
              lang: choiceLang,
            },
          })
        );
      }
      if (props.type === "level") {
        dispatch(
          changeDataFreelancers_to({
            ...dataFreelancers_to,
            langTwo: {
              ...dataFreelancers_to.langTwo,
              levelLang: choiceLang,
            },
          })
        );
      }
    }
    if (props.count === 3) {
      if (props.type === "lang") {
        dispatch(
          changeDataFreelancers_to({
            ...dataFreelancers_to,
            langThree: {
              ...dataFreelancers_to.langThree,
              lang: choiceLang,
            },
          })
        );
      }
      if (props.type === "level") {
        dispatch(
          changeDataFreelancers_to({
            ...dataFreelancers_to,
            langThree: {
              ...dataFreelancers_to.langThree,
              levelLang: choiceLang,
            },
          })
        );
      }
    }
  }, [choiceLang]);

  const clickChoice = (lang) => {
    setLookSelect(false);
    setChoiceLang(lang);
  };

  return (
    <div className={styles.langSelectTo}>
      <div
        className={styles.langSelectTo__from}
        onClick={() => setLookSelect(!lookSelect)}
      >
        <p
          className={
            choiceLang !== "" && lookSelect !== false ? styles.activeSelect : ""
          }
        >
          {choiceLang === "" ? props.initialText : choiceLang}
        </p>
        {lookSelect ? (
          <img src={arrow_top} alt="arrow" />
        ) : (
          <img src={arrow_bottom} alt="arrow" />
        )}
      </div>
      {lookSelect && (
        <div className="mySelect">
          {props.data?.map((lang) => (
            <p
              key={lang.id}
              onClick={() => clickChoice(lang.choice)}
              className={lang.choice === choiceLang ? styles.activeSelect : ""}
            >
              {lang.choice}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelectTo;
