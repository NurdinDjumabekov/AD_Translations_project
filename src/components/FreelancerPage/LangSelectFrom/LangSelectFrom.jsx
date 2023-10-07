import React, { useEffect, useState } from "react";
import styles from "./LangSelectFrom.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeDataFreelancers_from } from "../../../store/reducers/freelanceSlice";

const LangSelectFrom = ({ props }) => {
  const dispatch = useDispatch();
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState(props.initialText);
  const { dataFreelancers_from } = useSelector((state) => state.freelanceSlice);

  useEffect(() => {
    if (props.count === 1) {
      if (props.type === "lang") {
        dispatch(
          changeDataFreelancers_from({
            ...dataFreelancers_from,
            langOne: {
              ...dataFreelancers_from.langOne,
              lang: choiceLang,
            },
          })
        );
      } else if (props.type === "level") {
        dispatch(
          changeDataFreelancers_from({
            ...dataFreelancers_from,
            langOne: {
              ...dataFreelancers_from.langOne,
              levelLang: choiceLang,
            },
          })
        );
      }
    }
    if (props.count === 2) {
      if (props.type === "lang") {
        dispatch(
          changeDataFreelancers_from({
            ...dataFreelancers_from,
            langTwo: {
              ...dataFreelancers_from.langTwo,
              lang: choiceLang,
            },
          })
        );
      }
      if (props.type === "level") {
        dispatch(
          changeDataFreelancers_from({
            ...dataFreelancers_from,
            langTwo: {
              ...dataFreelancers_from.langTwo,
              levelLang: choiceLang,
            },
          })
        );
      }
    }
    if (props.count === 3) {
      if (props.type === "lang") {
        dispatch(
          changeDataFreelancers_from({
            ...dataFreelancers_from,
            langThree: {
              ...dataFreelancers_from.langThree,
              lang: choiceLang,
            },
          })
        );
      }
      if (props.type === "level") {
        dispatch(
          changeDataFreelancers_from({
            ...dataFreelancers_from,
            langThree: {
              ...dataFreelancers_from.langThree,
              levelLang: choiceLang,
            },
          })
        );
      }
    }
  }, [choiceLang]);

  useEffect(() => {
    setChoiceLang(props?.initialText);
  }, [props?.initialText]);

  const clickChoice = (lang) => {
    setLookSelect(false);
    setChoiceLang(lang);
  };

  const handleOutsideClick = (e) => {
    if (e.target.tagName === "SECTION" || e.target.tagName === "B") {
    } else {
      setLookSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={styles.langSelectFrom}>
      <section
        className={styles.LangSelectFrom__from}
        onClick={() => setLookSelect(!lookSelect)}
      >
        <b
          className={
            choiceLang !== "" && lookSelect !== false ? styles.activeSelect : ""
          }
        >
          {choiceLang === "" ? props.initialText : choiceLang}
        </b>
        {lookSelect ? (
          <img src={arrow_top} alt="arrow" />
        ) : (
          <img src={arrow_bottom} alt="arrow" />
        )}
      </section>
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

export default LangSelectFrom;
