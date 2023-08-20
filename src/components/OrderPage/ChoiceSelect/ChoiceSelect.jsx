import React, { useEffect, useState } from "react";
import styles from "./ChoiceSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderData,
  clearAllSelects,
} from "../../../store/reducers/orderPageSlice";

const ChoiceSelect = ({ props }) => {
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState(props.initialText);
  const dispatch = useDispatch();
  const { orderData, clearData } = useSelector((state) => state.orderPageSlice);

  useEffect(() => {
    const updateOrderData = () => {
      switch (props.textAbove) {
        case "Services":
          return { services: choiceLang };
        case "Industries":
          return { industries: choiceLang };
        case "From":
          return { fromLang: choiceLang };
        case "To":
          return { toLang: choiceLang };
        default:
          return {};
      }
    };
    dispatch(changeOrderData({ ...orderData, ...updateOrderData() }));
  }, [choiceLang]);

  console.log(orderData);
  // console.log(props.initialText);

  const clickChoice = (lang) => {
    setLookSelect(false);
    setChoiceLang(lang);
    dispatch(clearAllSelects(false)); // для того чтобы можно было еще раз стереть все данные
  };

  useEffect(() => {
    if (clearData) {
      setChoiceLang(props.initialText);
    }
  }, [clearData]);

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

export default ChoiceSelect;
