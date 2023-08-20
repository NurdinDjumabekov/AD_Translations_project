import React, { useEffect } from "react";
import styles from "./ActionBtns.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeErrorSend } from "../../../store/reducers/stateSendDataSlice";
import { checkDate, checkEmail, checkNum } from "../../../helpers/validation";
import {
  changeOrderData,
  changeTypeDoc,
  clearAllSelects,
} from "../../../store/reducers/orderPageSlice";

const ActionBtns = ({ doc, setDoc }) => {
  const dispatch = useDispatch();
  const { orderData, typeDoc } = useSelector((state) => state.orderPageSlice);
  const { errorSend } = useSelector((state) => state.stateSendDataSlice);

  const clearAllData = () => {
    setDoc(null);
    dispatch(clearAllSelects(true));
    dispatch(
      changeOrderData({
        date: "",
        email: "",
        phoneNum: "",
      })
    );
    dispatch(changeTypeDoc(1));
  };

  const checkDocuments = () => {
    if (doc) {
      checkDate(orderData, doc, typeDoc, dispatch, errorSend);
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

  // useEffect(() => {
  //   clearAllData();
  // }, []);

  return (
    <div className={styles.actionBtns}>
      <button onClick={() => clearAllData()}>Clear</button>
      <button onClick={checkDocuments}>SEND</button>
    </div>
  );
};

export default ActionBtns;
