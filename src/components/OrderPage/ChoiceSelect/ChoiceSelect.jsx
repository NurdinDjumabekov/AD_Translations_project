import React, { useEffect, useState } from "react";
import styles from "./ChoiceSelect.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderData,
  changeidEverySelect,
  clearAllSelects,
} from "../../../store/reducers/orderPageSlice";
import { useTranslation } from "react-i18next";
import {
  changeChoiceLang,
  changeSelect,
} from "../../../store/reducers/selectSlice";

const ChoiceSelect = ({ props }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [langId, setLangId] = useState(1);
  const { select, choiceLang } = useSelector((state) => state.selectSlice);
  const { orderData, clearData, idEverySelect } = useSelector(
    (state) => state.orderPageSlice
  );

  useEffect(() => {
    const text = props?.initialText;
    const lookInitialState = () => {
      switch (props?.type) {
        case 1:
          return { industries: props?.initialText };
        case 2:
          return { services: text };
        case 3:
          return { fromLang: text };
        case 4:
          return { toLang: text };
      }
    };
    dispatch(changeChoiceLang({ ...choiceLang, ...lookInitialState() }));
  }, [props?.initialText]);

  useEffect(() => {
    const updateOrderData = () => {
      switch (props?.type) {
        case 1:
          return { industries: choiceLang.industries };
        case 2:
          return { services: choiceLang.services };
        case 3:
          return { fromLang: choiceLang.fromLang };
        case 4:
          return { toLang: choiceLang.toLang };
      }
    };
    dispatch(changeOrderData({ ...orderData, ...updateOrderData() }));

    const updateSelectID = () => {
      switch (props?.textAbove) {
        case t("Services"):
          return { services: langId };
        case t("Industries"):
          return { industries: langId };
        case t("From"):
          return { fromLang: langId };
        case t("To"):
          return { toLang: langId };
      }
    };
    dispatch(changeidEverySelect({ ...idEverySelect, ...updateSelectID() }));
  }, [choiceLang, t]);

  const clickSelect = (bool, type) => {
    let updatedPayload = {};
    switch (type) {
      case 1:
        updatedPayload = { industries: bool };
        break;
      case 2:
        updatedPayload = { services: bool };
        break;
      case 3:
        updatedPayload = { fromLang: bool };
        break;
      case 4:
        updatedPayload = { toLang: bool };
        break;
    }
    dispatch(changeSelect({ ...select, ...updatedPayload }));
  };

  const clickChoice = (lang, id) => {
    clickSelect(false, props?.type);
    switch (props?.type) {
      case 1:
        dispatch(changeChoiceLang({ ...choiceLang, industries: lang }));
        break;
      case 2:
        dispatch(changeChoiceLang({ ...choiceLang, services: lang }));
        break;
      case 3:
        dispatch(changeChoiceLang({ ...choiceLang, fromLang: lang }));
        break;
      case 4:
        dispatch(changeChoiceLang({ ...choiceLang, toLang: lang }));
        break;
      default:
        break;
    }
    setLangId(id);
    dispatch(clearAllSelects(false)); // для того чтобы можно было еще раз стереть все данные
  };

  useEffect(() => {
    if (clearData) {
      switch (props?.type) {
        case 1:
          dispatch(changeChoiceLang({ industries: props?.initialText }));
          break;
        case 2:
          dispatch(
            changeChoiceLang({ ...choiceLang, services: props?.initialText })
          );
          break;
        case 3:
          dispatch(
            changeChoiceLang({ ...choiceLang, fromLang: props?.initialText })
          );
          break;
        case 4:
          dispatch(
            changeChoiceLang({ ...choiceLang, toLang: props?.initialText })
          );
          break;
      }
    }
  }, [clearData]);

  return (
    <div className={styles.choiceSelect}>
      <p className="textAboveSelect">{props.textAbove}</p>
      <div
        className={styles.choiceSelect_from}
        onClick={() => clickSelect(!props.state, props?.type)}
      >
        <p
          className={
            props.choiceData !== "" && props.state !== false
              ? styles.activeSelect
              : ""
          }
        >
          {props.choiceData === "" ? props?.initialText : props.choiceData}
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
                lang.choice === props.choiceData ? styles.activeSelect : ""
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
