import React, { useEffect, useState } from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";
import { useDispatch, useSelector } from "react-redux";
import GoodSendData from "../../components/GoodSendData/GoodSendData";
import ActionBtns from "../../components/OrderPage/ActionBtns/ActionBtns";
import { updateForSelects } from "../../helpers/updateForSelects";
import { useTranslation } from "react-i18next";
import {
  changeSelect,
  clearIdEverySelect,
} from "../../store/reducers/selectSlice";

const OrderPage = () => {
  const [doc, setDoc] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const { select, choiceLang } = useSelector((state) => state.selectSlice);
  const { dataServices, dataIndustries, langData } = useSelector(
    (state) => state.onServerSlice
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      changeSelect({
        services: false,
        industries: false,
        fromLang: false,
        toLang: false,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(clearIdEverySelect());
  }, [langData]);

  const arr = [
    {
      data: updateForSelects(dataIndustries, "Industries"),
      textAbove: "choice_Industries",
      initialText: dataIndustries?.[0]?.iconText,
      state: select?.industries,
      choiceData: choiceLang?.industries,
      key: "industries",
    },
    {
      data: updateForSelects(dataServices, "Services"),
      textAbove: "choice_Services",
      initialText: dataServices?.[0]?.title,
      state: select?.services,
      choiceData: choiceLang?.services,
      key: "services",
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
                {arr?.map((i, index) => (
                  <ChoiceSelect
                    key={index}
                    props={{
                      data: i?.data,
                      textAbove: t(i?.textAbove),
                      initialText: i.initialText,
                      state: i?.state,
                      choiceData: i?.choiceData,
                      type: i?.type,
                      key: i?.key,
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
