import React, { useEffect, useState } from "react";
import styles from "./LangSelectTo.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeDataFreelancers_to } from "../../../store/reducers/freelanceSlice";

const LangSelectTo = ({ props }) => {
  const dispatch = useDispatch();
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState(props.initialText);
  const { dataFreelancers_to } = useSelector((state) => state.freelanceSlice);

  useEffect(()=>{
    dispatch(changeDataFreelancers_to({
      ...dataFreelancers_to,
      [props?.path]:{
        ...dataFreelancers_to?.[props?.path],
        [props.pathInner]: choiceLang
      }
    }))
  },[choiceLang])

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
    <div className={styles.langSelectTo}>
      <section
        className={styles.langSelectTo__from}
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

export default LangSelectTo;
