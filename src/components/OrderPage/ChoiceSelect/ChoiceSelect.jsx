import React, { useEffect, useState } from "react";
import styles from "./ChoiceSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderData } from "../../../store/reducers/orderPageSlice";
import {
  changeChoiceLang,
  changeSelect,
  changeidEverySelect,
} from "../../../store/reducers/selectSlice";

const ChoiceSelect = ({ props }) => {
  const dispatch = useDispatch();
  const { select, choiceLang, idEverySelect } = useSelector(
    (state) => state.selectSlice
  );

  const { orderData, clearData } = useSelector((state) => state.orderPageSlice);

  useEffect(() => {
    dispatch(changeChoiceLang({ [props.key]: props?.initialText }));
  }, [props?.initialText]);

  useEffect(() => {
    dispatch(
      changeOrderData({ ...orderData, [props.key]: choiceLang[props.key] })
    );
  }, [choiceLang]);

  const clickSelect = (bool) => {
    dispatch(changeSelect({ ...select, [props.key]: bool }));
  };

  const clickChoice = (lang, id) => {
    clickSelect(false);
    dispatch(changeChoiceLang({ [props.key]: lang }));
    dispatch(changeidEverySelect({ [props.key]: id }));
  };

  return (
    <div className={styles.choiceSelect}>
      <p className="textAboveSelect">{props.textAbove}</p>
      <div
        className={styles.choiceSelect_from}
        onClick={() => clickSelect(!props.state)}
      >
        <p
          className={
            props.choiceData !== "" && props.state !== false
              ? styles.activeSelect
              : ""
          }
        >
          {choiceLang[props.key] === ""
            ? props?.initialText
            : choiceLang[props.key]}
        </p>
        {props.state ? (
          <img src={arrow_top} alt="arrow" />
        ) : (
          <img src={arrow_bottom} alt="arrow" />
        )}
      </div>
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
