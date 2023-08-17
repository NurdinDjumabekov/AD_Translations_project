import React, { useEffect, useState } from "react";
import styles from "./DataUsers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderData } from "../../../store/reducers/orderPageSlice";

export const DataUsers = () => {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state) => state.orderPageSlice);
  const { errorSend } = useSelector((state) => state.stateSendDataSlice);

  return (
    <div className={styles.blockData}>
      <label>
        <input
          type="email"
          className={errorSend.email ? styles.badInput : ""}
          onChange={(e) =>
            dispatch(
              changeOrderData({
                ...orderData,
                email: e.target.value,
              })
            )
          }
          value={orderData.email}
          placeholder="E-mail"
        />
      </label>
      <label>
        <input
          className={errorSend.phoneNum ? styles.badInput : ""}
          onChange={(e) =>
            dispatch(
              changeOrderData({
                ...orderData,
                phoneNum: e.target.value,
              })
            )
          }
          type="phone"
          value={orderData.phoneNum}
          placeholder="+996(700)754-454"
        />
      </label>
    </div>
  );
};
