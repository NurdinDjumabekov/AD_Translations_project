import React, { useEffect, useState } from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";
import { useSelector } from "react-redux";
import GoodSendData from "../../components/GoodSendData/GoodSendData";
import Preloader from "../../components/Preloader/Preloader";
import ActionBtns from "../../components/OrderPage/ActionBtns/ActionBtns";
import { updateForSelects } from "../../helpers/updateForSelects";
import { textGoodSendData } from "../../localData/data";

const OrderPage = () => {
  const [doc, setDoc] = useState(null);

  const { preloader } = useSelector((state) => state.mainPageSlice);
  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const { allLang } = useSelector((state) => state.servicesPageSlice);

  const { dataServices, dataIndustries } = useSelector(
    (state) => state.onServerSlice
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {goodSendData ? (
        <div className={styles.order}>
          <div className="container">
            <h5>Get in touch</h5>
            <i>and let’s start your translation journey</i>
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
