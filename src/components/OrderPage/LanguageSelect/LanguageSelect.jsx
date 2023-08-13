import React, { useState } from "react";
import styles from "./LanguageSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";

const LanguageSelect = () => {
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState("");

  const data = [
    {
      choice: "Arabic",
      id: 1,
    },
    {
      choice: "Azerbaijani",
      id: 2,
    },
    {
      choice: "Czech",
      id: 3,
    },
    {
      choice: "English",
      id: 4,
    },
    {
      choice: "German",
      id: 5,
    },
    {
      choice: "Hindi",
      id: 6,
    },
    {
      choice: "Irish",
      id: 7,
    },
    {
      choice: "Italian",
      id: 8,
    },
  ];

  const clickChoice = (lang, id) => {
    setLookSelect(false);
    setChoiceLang(lang);
  };

  return (
    <div className={styles.languageSelect}>
      <p className="textAboveSelect">From</p>
      <div
        className={styles.languageSelect_from}
        onClick={() => setLookSelect(!lookSelect)}
      >
        <p
          className={
            choiceLang !== "" && lookSelect !== false ? styles.activeSelect : ""
          }
        >
          {choiceLang === "" ? "choose language" : choiceLang}
        </p>
        {lookSelect ? (
          <img src={arrow_top} alt="arrow" />
        ) : (
          <img src={arrow_bottom} alt="arrow" />
        )}
      </div>
      {lookSelect && (
        <div className="mySelect">
          {data?.map((lang) => (
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

export default LanguageSelect;
