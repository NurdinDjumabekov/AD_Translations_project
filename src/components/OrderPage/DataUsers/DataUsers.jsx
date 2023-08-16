import React, { useEffect, useState } from "react";
import styles from "./DataUsers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderData } from "../../../store/reducers/orderPageSlice";

export const DataUsers = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    phoneNum: "",
  });
  const { orderData } = useSelector((state) => state.orderPageSlice);

  useEffect(() => {
    dispatch(
      changeOrderData({
        ...orderData,
        email: data.email,
        phoneNum: data.phoneNum,
      })
    );
  }, [data]);

  return (
    <div className={styles.blockData}>
      <label>
        <input
          type="email"
          onChange={(e) =>
            setData((info) => ({
              ...info,
              email: e.target.value,
            }))
          }
          placeholder="E-mail"
        />
      </label>
      <label>
        <input
          onChange={(e) =>
            setData((info) => ({
              ...info,
              phoneNum: e.target.value,
            }))
          }
          type="phone"
          placeholder="+996(700)754-454"
        />
      </label>
    </div>
  );
};
