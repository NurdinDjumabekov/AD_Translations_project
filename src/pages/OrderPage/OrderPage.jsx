import React, { useEffect, useState } from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";
import { useDispatch, useSelector } from "react-redux";
import GoodSendData from "../../components/GoodSendData/GoodSendData";
import Preloader from "../../components/Preloader/Preloader";
import ActionBtns from "../../components/OrderPage/ActionBtns/ActionBtns";
import { updateForSelects } from "../../helpers/updateForSelects";
import { textGoodSendData } from "../../localData/data";

const OrderPage = () => {
  const [doc, setDoc] = useState(null);

  const { preloader } = useSelector((state) => state.mainPageSlice);
  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const { dataServices, dataIndustries, allLang } = useSelector(
    (state) => state.servicesPageSlice
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {goodSendData ? (
        <div className={styles.order}>
          <div className="container">
            <h5>Translation</h5>
            <i>Fill in the features</i>
            <div className={styles.order__inner}>
              <div className={styles.order__services}>
                <ChoiceSelect
                  props={{
                    data: updateForSelects(dataIndustries, "Industries"),
                    textAbove: "Industries",
                    initialText: "General",
                  }}
                />
                <ChoiceSelect
                  props={{
                    data: updateForSelects(dataServices, "Services"),
                    textAbove: "Services",
                    initialText: "Editing",
                  }}
                />
              </div>
              <TypesDocuments
                doc={doc}
                setDoc={setDoc}
                data={updateForSelects(allLang, "allLang")}
              />
            </div>
            <ActionBtns doc={doc} setDoc={setDoc} />
          </div>
        </div>
      ) : (
        <GoodSendData text={textGoodSendData} />
      )}
      {preloader && <Preloader />}
    </>
  );
};

export default OrderPage;
