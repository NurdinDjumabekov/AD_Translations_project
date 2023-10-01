import React, { useEffect, useState } from "react";
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

  return (
    <>
      {goodSendData ? (
        <div className={styles.order}>
          <div className="container">
            <h5>{t("order_title")}</h5>
            <i>{t("order_subtitle")}</i>
            <div className={styles.order__inner}>
              <div className={styles.order__services}>
                {dataIndustries?.length !== 0 && (
                  <ChoiceSelect
                    props={{
                      data: updateForSelects(dataIndustries, "Industries"),
                      textAbove: t("choice_Industries"),
                      initialText: t("initialIndustries"),
                      state: select.industries,
                      choiceData: choiceLang.industries,
                      type: 1,
                    }}
                  />
                )}
                {dataServices?.length !== 0 && (
                  <ChoiceSelect
                    props={{
                      data: updateForSelects(dataServices, "Services"),
                      textAbove: t("choice_Services"),
                      initialText: t("initialServices"),
                      state: select.services,
                      choiceData: choiceLang.services,
                      type: 2,
                    }}
                  />
                )}
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
