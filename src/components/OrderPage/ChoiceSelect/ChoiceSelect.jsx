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
    switch (props?.textAbove) {
      case t("Services"):
        dispatch(
          changeChoiceLang({ ...choiceLang, services: props?.initialText })
        );
        break;
      case t("Industries"):
        dispatch(
          changeChoiceLang({ ...choiceLang, industries: props?.initialText })
        );
        break;
      case t("From"):
        dispatch(
          changeChoiceLang({ ...choiceLang, fromLang: props?.initialText })
        );
        break;
      case t("To"):
        dispatch(
          changeChoiceLang({ ...choiceLang, toLang: props?.initialText })
        );
        break;
    }
  }, [props?.initialText]);

  useEffect(() => {
    const updateOrderData = () => {
      switch (props?.textAbove) {
        case t("Services"):
          return { services: choiceLang.services };
        case t("Industries"):
          return { industries: choiceLang.industries };
        case t("From"):
          return { toLang: choiceLang.fromLang };
        case t("To"):
          return { fromLang: choiceLang.toLang };
      }
    };
    dispatch(changeOrderData({ ...orderData, ...updateOrderData() }));

    const updateSelectID = () => {
      switch (props?.textAbove) {
        case t("Services"):
          return { services: langId };
        case t("Industries"):
          return { industries: langId };
        case t("To"):
          return { toLang: langId };
        case t("From"):
          return { fromLang: langId };
      }
    };
    dispatch(changeidEverySelect({ ...idEverySelect, ...updateSelectID() }));
  }, [choiceLang, t]);

  const clickSelect = (bool, type) => {
    let updatedPayload = {};
    switch (type) {
      case t("Services"):
        updatedPayload = { services: bool };
        break;
      case t("Industries"):
        updatedPayload = { industries: bool };
        break;
      case t("To"):
        updatedPayload = { toLang: bool };
        break;
      case t("From"):
        updatedPayload = { fromLang: bool };
        break;
      default:
        break;
    }
    dispatch(changeSelect({ ...select, ...updatedPayload }));
  };

  const clickChoice = (lang, id) => {
    clickSelect(false, props?.textAbove);
    switch (props?.textAbove) {
      case t("Services"):
        dispatch(changeChoiceLang({ ...choiceLang, services: lang }));
        break;
      case t("Industries"):
        dispatch(changeChoiceLang({ ...choiceLang, industries: lang }));
        break;
      case t("From"):
        dispatch(changeChoiceLang({ ...choiceLang, fromLang: lang }));
        break;
      case t("To"):
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
      switch (props?.textAbove) {
        case t("Services"):
          dispatch(
            changeChoiceLang({ ...choiceLang, services: props?.initialText })
          );
          break;
        case t("Industries"):
          dispatch(
            changeChoiceLang({ ...choiceLang, industries: props?.initialText })
          );
          break;
        case t("From"):
          dispatch(
            changeChoiceLang({ ...choiceLang, fromLang: props?.initialText })
          );
          break;
        case t("To"):
          dispatch(
            changeChoiceLang({ ...choiceLang, toLang: props?.initialText })
          );
          break;
        default:
          break;
      }
    }
  }, [clearData]);

  return (
    <div className={styles.choiceSelect}>
      <p className="textAboveSelect">{props.textAbove}</p>
      <div
        className={styles.choiceSelect_from}
        onClick={() => clickSelect(!props.state, props?.textAbove)}
      >
        <p
          className={
            props.choiceData !== "" && props.state !== false
              ? styles.activeSelect
              : ""
          }
        >
          {props.choiceData === "" ? props.initialText : props.choiceData}
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
