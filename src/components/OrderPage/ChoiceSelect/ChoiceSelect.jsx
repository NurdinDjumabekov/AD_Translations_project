import React, { useEffect, useState } from "react";
import styles from "./ChoiceSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderData } from "../../../store/reducers/orderPageSlice";

const ChoiceSelect = ({ props }) => {
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState("");
  const dispatch = useDispatch();
  const { orderData } = useSelector((state) => state.orderPageSlice);

  useEffect(() => {
    switch (props.textAbove) {
      case "Services":
        dispatch(
          changeOrderData({
            ...orderData,
            services: choiceLang,
          })
        );
        break;
      case "Industries":
        dispatch(
          changeOrderData({
            ...orderData,
            industries: choiceLang,
          })
        );
        break;
      case "From":
        dispatch(
          changeOrderData({
            ...orderData,
            fromLang: choiceLang,
          })
        );
        break;
      case "To":
        dispatch(
          changeOrderData({
            ...orderData,
            toLang: choiceLang,
          })
        );
        break;
    }
  }, [choiceLang]);

  // console.log(orderData);

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
