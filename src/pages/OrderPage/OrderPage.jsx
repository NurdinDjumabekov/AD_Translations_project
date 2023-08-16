import React, { useEffect } from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";
import { useDispatch, useSelector } from "react-redux";
import {
  toTakeIndustries,
  toTakeLanguage,
  toTakeServices,
} from "../../store/reducers/dataSelectSlice";
import { sendDataOrder } from "../../store/reducers/orderPageSlice";

const OrderPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toTakeServices());
    dispatch(toTakeIndustries());
    dispatch(toTakeLanguage());
  }, []);

  const { typeServices, typeIndustries, typeLanguage } = useSelector(
    (state) => state.dataSelectSlice
  );

  const { orderData } = useSelector((state) => state.orderPageSlice);
  console.log(orderData);

  const sendRequestData = () => {
    dispatch(sendDataOrder(orderData));
  };

  return (
    <div className={styles.order}>
      <div className="container">
        <h5>Translation</h5>
        <i>Fill in the features</i>
        <div className={styles.order__inner}>
          <div className={styles.order__services}>
            <ChoiceSelect
              props={{
                data: typeServices,
                textAbove: "Services",
                initialText: "Editing",
              }}
            />
            <ChoiceSelect
              props={{
                data: typeIndustries,
                textAbove: "Industries",
                initialText: "General",
              }}
            />
          </div>
          <TypesDocuments data={typeLanguage} />
        </div>
        <div className={styles.order__btns}>
          <button>Clear</button>
          <button onClick={sendRequestData}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
