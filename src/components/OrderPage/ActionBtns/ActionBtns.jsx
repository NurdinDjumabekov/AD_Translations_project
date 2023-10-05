import React from "react";
import styles from "./ActionBtns.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeErrorSend } from "../../../store/reducers/stateSendDataSlice";
import { checkDate } from "../../../helpers/validation";
import {
  changeOrderData,
  changeTypeDoc,
} from "../../../store/reducers/orderPageSlice";
import { useTranslation } from "react-i18next";
import {
  changeChoiceLang,
  clearIdEverySelect,
} from "../../../store/reducers/selectSlice";

const ActionBtns = ({ doc, setDoc }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { orderData, typeDoc } = useSelector((state) => state.orderPageSlice);
  const { dataServices, dataIndustries, langData } = useSelector(
    (state) => state.onServerSlice
  );
  const { allLang } = useSelector((state) => state.servicesPageSlice);
  const { choiceLang, idEverySelect } = useSelector(
    (state) => state.selectSlice
  );
  // console.log(choiceLang, "choiceLang");
  console.log(idEverySelect, "idEverySelect");

  const { errorSend } = useSelector((state) => state.stateSendDataSlice);

  const clearAllData = () => {
    setDoc(null);
    dispatch(
      changeOrderData({
        date: "",
        email: "",
        phoneNum: "",
      })
    );
    dispatch(clearIdEverySelect({}));
    dispatch(
      changeChoiceLang({
        fromLang: allLang?.[0]?.name,
        toLang: allLang?.[1]?.name,
        industries: dataIndustries?.[0]?.iconText,
        services: dataServices?.[0]?.title,
      })
    );
    dispatch(changeTypeDoc(1));
  };

  const checkDocuments = () => {
    if (doc) {
      checkDate(orderData, doc, typeDoc, dispatch, errorSend, idEverySelect);
    } else {
      dispatch(
        changeErrorSend({
          ...errorSend,
          doc: true,
        })
      );
      setTimeout(() => {
        dispatch(
          changeErrorSend({
            ...errorSend,
            doc: false,
          })
        );
      }, 1500);
    }
  };

  // все выборочное селекты на валидацию не проверяю, ибо чел не может выбрать что-то пустое

  return (
    <div className={styles.actionBtns}>
      <button onClick={clearAllData}>{t("Clear")}</button>
      <button onClick={checkDocuments}>{t("SEND")}</button>
    </div>
  );
};

export default ActionBtns;
