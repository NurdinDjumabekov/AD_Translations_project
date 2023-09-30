import React, { useEffect, useState } from "react";
import styles from "./TypesDocuments.module.css";
import ChoiceSelect from "../ChoiceSelect/ChoiceSelect";
import DataForSend from "../DataForSend/DataForSend";
import { DataUsers } from "../DataUsers/DataUsers";
import { useDispatch, useSelector } from "react-redux";
import { typeData } from "../../../localData/data";
import {
  changeOrderData,
  changeTypeDoc,
} from "../../../store/reducers/orderPageSlice";
import InputMask from "react-input-mask";
import { useTranslation } from "react-i18next";

const TypesDocuments = ({ doc, data, setDoc }) => {
  const [stateData, setStateData] = useState(true);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { orderData, typeDoc } = useSelector((state) => state.orderPageSlice);
  const { errorSend } = useSelector((state) => state.stateSendDataSlice);
  const { select, choiceLang } = useSelector((state) => state.selectSlice);

  useEffect(() => {
    if (stateData === false) {
      dispatch(
        changeOrderData({
          ...orderData,
          date: "auto",
        })
      );
    } else {
      dispatch(
        changeOrderData({
          ...orderData,
          date: "",
        })
      );
    }
  }, [stateData]);

  const clickTypeDoc = (type) => {
    dispatch(changeTypeDoc(type));
    setDoc(null);
  };

  const clickAutoDate = () => {
    setStateData(false);
    dispatch(
      changeOrderData({
        ...orderData,
        date: "auto",
      })
    );
  };

  return (
    <>
      <div className={styles.docType}>
        {typeData?.map((btn) => (
          <button
            key={btn.id}
            onClick={() => clickTypeDoc(btn.id)}
            className={btn.id === typeDoc ? styles.activeBtn : ""}
          >
            {t(btn.doc)}
          </button>
        ))}
      </div>
      <div className={styles.order__language}>
        {data?.length !== 0 && (
          <>
            <ChoiceSelect
              props={{
                data: data, // это языки
                textAbove: t("choice_from"),
                initialText: data?.[0]?.choice,
                state: select.fromLang,
                choiceData: choiceLang.fromLang,
              }}
            />
            <ChoiceSelect
              props={{
                data: data, // это языки
                textAbove: t("choice_to"),
                initialText: data?.[1]?.choice,
                state: select.toLang,
                choiceData: choiceLang.toLang,
              }}
            />
          </>
        )}
      </div>
      <div className={styles.typeSendData}>
        <DataForSend doc={doc} setDoc={setDoc} />
        <div className={styles.sendDate}>
          <p>{t("Deadline")}</p>
          {stateData ? (
            <label>
              <InputMask
                className={errorSend.date ? styles.badInput : ""}
                mask="9999-99-99"
                maskPlaceholder=""
                onChange={(e) =>
                  dispatch(
                    changeOrderData({
                      ...orderData,
                      date: e.target.value,
                    })
                  )
                }
                value={orderData.date}
                placeholder={t("YYYY-MM-DD")}
              />
              <button onClick={() => setStateData(false)}>{t("Auto")}</button>
            </label>
          ) : (
            <div onClick={() => setStateData(true)}>
              <p>{t("Auto")}</p>
              <button onClick={() => clickAutoDate()}>{t("Auto")}</button>
            </div>
          )}
        </div>
      </div>
      <DataUsers />
    </>
  );
};

export default TypesDocuments;
