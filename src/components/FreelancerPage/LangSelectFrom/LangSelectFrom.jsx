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
    dispatch(
      changeDataFreelancers_from({
        ...dataFreelancers_from,
        [props?.path]: {
          ...dataFreelancers_from?.[props?.path],
          [props.pathInner]: choiceLang,
        },
      })
    );
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
        <section className="shadow"></section>
        <img
          src={arrow_bottom}
          style={
            lookSelect
              ? { transform: "rotate(180deg)", transition: ".7s" }
              : { transform: "rotate(0deg)", transition: ".7s" }
          }
          alt="arrow"
        />
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
