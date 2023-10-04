import React, { useEffect, useMemo, useState } from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";
import { useDispatch, useSelector } from "react-redux";
import GoodSendData from "../../components/GoodSendData/GoodSendData";
import ActionBtns from "../../components/OrderPage/ActionBtns/ActionBtns";
import { updateForSelects } from "../../helpers/updateForSelects";
import { useTranslation } from "react-i18next";
import { changeSelect } from "../../store/reducers/selectSlice";
import { choiceTypeLang } from "../../helpers/choiceTypeLang";

const OrderPage = () => {
  const [doc, setDoc] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const { select, choiceLang } = useSelector((state) => state.selectSlice);
  const { dataServices, dataIndustries, langData } = useSelector(
    (state) => state.onServerSlice
  );
  // console.log(dataServices, dataIndustries, "dataIndustries");
  // console.log(allLang, "allLang");
  // console.log(dataServices, "dataServices");
  console.log(choiceLang, "choiceLang");
  // console.log(select, "select");

  const closeAllSelects = () => {
    dispatch(
      changeSelect({
        services: false,
        industries: false,
        fromLang: false,
        toLang: false,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    closeAllSelects();
  }, []);
  // console.log(dataIndustries?.[0]?.iconText, "dataIndustries[0].iconText");

  const arr = [
    {
      id: 1,
      type: 1,
      data: updateForSelects(dataIndustries, "Industries"),
      textAbove: "choice_Industries",
      initialText: dataIndustries?.[0]?.iconText,
      state: select.industries,
      choiceData: choiceLang.industries,
    },
    {
      id: 2,
      type: 2,
      data: updateForSelects(dataServices, "Services"),
      textAbove: "choice_Services",
      initialText: "initialServices",
      state: select.services,
      choiceData: choiceLang.services,
    },
  ];

  return (
    <>
      {goodSendData ? (
        <div className={styles.order}>
          <div className="container">
            <h5>{t("order_title")}</h5>
            <i>{t("order_subtitle")}</i>
            <div className={styles.order__inner}>
              <div className={styles.order__services}>
                {arr?.map((i, k) => (
                  <ChoiceSelect
                    key={k}
                    props={{
                      data: i?.data,
                      textAbove: t(i?.textAbove),
                      initialText: t(i.initialText),
                      state: i?.state,
                      choiceData: i?.choiceData,
                      type: i?.type,
                    }}
                  />
                ))}
              </div>
              <TypesDocuments doc={doc} setDoc={setDoc} />
            </div>
            <ActionBtns doc={doc} setDoc={setDoc} />
          </div>
        </div>
      ) : (
        <GoodSendData text={t("textGoodSendData")} />
      )}
    </>
  );
};

export default OrderPage;
