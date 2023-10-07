import React, { useEffect, useRef, useState } from "react";
import styles from "./ChoiceSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeChoiceLang,
  changeSelect,
  changeidEverySelect,
} from "../../../store/reducers/selectSlice";

const ChoiceSelect = ({ props }) => {
  const dispatch = useDispatch();
  const { select, choiceLang } = useSelector((state) => state.selectSlice);

  useEffect(() => {
    dispatch(changeChoiceLang({ [props.key]: props?.initialText }));
  }, [props?.initialText]);

  const clickSelect = (bool) => {
    dispatch(changeSelect({ ...select, [props.key]: bool }));
  };

  const clickChoice = (lang, id) => {
    clickSelect(false);
    dispatch(changeChoiceLang({ [props.key]: lang }));
    dispatch(changeidEverySelect({ [props.key]: id }));
  };

  const handleOutsideClick = (e) => {
    if (e.target.tagName === "SECTION" || e.target.tagName === "B") {
    } else {
      dispatch(changeSelect({ ...select, [props.key]: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={styles.choiceSelect}>
      <b className="textAboveSelect">{props.textAbove}</b>
      <section
        className={styles.choiceSelect_from}
        onClick={() => clickSelect(!props.state)}
      >
        <b
          className={
            props.choiceData !== "" && props.state !== false
              ? styles.activeSelect
              : ""
          }
        >
          {choiceLang[props.key] === ""
            ? props?.initialText
            : choiceLang[props.key]}
        </b>
        {props.state ? (
          <img src={arrow_top} alt="arrow" />
        ) : (
          <img src={arrow_bottom} alt="arrow" />
        )}
      </section>
      {props.state && (
        <div className="mySelect">
          {props?.data?.map((lang) => (
            <p
              key={lang?.id}
              onClick={() => clickChoice(lang?.choice, lang.id)}
              className={
                lang?.choice === choiceLang[props.key]
                  ? styles.activeSelect
                  : ""
              }
            >
              {lang?.choice}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChoiceSelect;
