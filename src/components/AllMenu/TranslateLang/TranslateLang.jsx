import React, { useEffect, useState } from "react";
import i18n from "../../../i18n";
import styles from "./TranslateLang.module.css";
import kg_img from "../../../assets/images/language/kg.svg";
import ru_img from "../../../assets/images/language/ru.svg";
import en_img from "../../../assets/images/language/en.svg";
import arrow from "../../../assets/images/language/arrowLang.svg";
import { changeLangData } from "../../../store/reducers/onServerSlice";
import { useDispatch, useSelector } from "react-redux";
import { choiceLangData } from "../../../store/reducers/selectSlice";

const TranslateLang = () => {
  const dispatch = useDispatch();
  const translateName = [
    {
      id: 1,
      name: "English",
      language: "en",
      img: en_img,
    },
    {
      id: 2,
      name: "Russian",
      language: "ru",
      img: ru_img,
    },
    {
      id: 3,
      name: "Kyrgyz",
      language: "ky",
      img: kg_img,
    },
  ];

  // const [count, setCount] = useState(1);
  const [activeSelect, setActiveSelect] = useState(false);
  const { langData } = useSelector((state) => state.selectSlice);

  const changeLang = (e, lang, id) => {
    i18n.changeLanguage(lang === "ky" ? "kg" : lang);
    dispatch(changeLangData(lang));
    // setCount(id);
    dispatch(choiceLangData(id));
  };

  const handleOutsideClick = (e) => {
    if (e.target.tagName === "SECTION" || e.target.tagName === "B") {
    } else {
      setActiveSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={styles.traslationBtns}>
      <section
        onClick={() => setActiveSelect(!activeSelect)}
        className={styles.traslationBtns__inner}
      >
        <img
          className={styles.traslationBtns__imgLang}
          src={translateName[langData - 1].img}
          alt="en"
        />
        <p>{translateName[langData - 1].name}</p>
        <img
          style={
            activeSelect
              ? { transform: "rotate(180deg)", transition: ".7s" }
              : { transform: "rotate(0deg)", transition: ".7s" }
          }
          className={styles.traslationBtns__imgArrow}
          src={arrow}
          alt="|"
        />
      </section>
      <section
        onClick={() => setActiveSelect(!activeSelect)}
        className={styles.shadow}
      ></section>
      {activeSelect && (
        <div
          className={styles.traslationBtns__select}
          onClick={() => setActiveSelect(false)}
        >
          {translateName.map((lang) => (
            <button
              key={lang.id}
              onClick={(e) => changeLang(e, lang.language, lang.id)}
              style={langData === lang.id ? { display: "none" } : {}}
            >
              <img src={lang.img} alt="lang" />
              <p>{lang.name}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TranslateLang;
