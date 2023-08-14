import React, { useState } from "react";
import styles from "./ChoiceSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";

const ChoiceSelect = ({ props }) => {
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState("");

  const clickChoice = (lang, id) => {
    setLookSelect(false);
    setChoiceLang(lang);
  };

  return (
    <div className={styles.choiceSelect}>
      <p className="textAboveSelect">{props.textAbove}</p>
      <div
        className={styles.choiceSelect_from}
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
              onClick={() => clickChoice(lang.choice, lang.id)}
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

export default ChoiceSelect;
