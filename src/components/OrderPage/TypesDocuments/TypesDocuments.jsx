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

const TypesDocuments = ({ doc, data, setDoc }) => {
  const [stateData, setStateData] = useState(true);

  const dispatch = useDispatch();
  const { orderData, typeDoc } = useSelector((state) => state.orderPageSlice);
  const { errorSend } = useSelector((state) => state.stateSendDataSlice);

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
            {btn.doc}
          </button>
        ))}
      </div>
      <div className={styles.order__language}>
        <ChoiceSelect
          props={{
            data,
            textAbove: "From",
            initialText: "English",
          }}
        />
        <ChoiceSelect
          props={{ data, textAbove: "To", initialText: "Russian" }}
        />
      </div>
      <div className={styles.typeSendData}>
        <DataForSend doc={doc} setDoc={setDoc} />
        <div className={styles.sendDate}>
          <p>Deadline</p>
          {stateData ? (
            <label>
              {/* <input type="text" value={orderData.date} maxLength="10" /> */}
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
                placeholder="DD-MM-YY"
              />
              <button onClick={() => setStateData(false)}>Auto</button>
            </label>
          ) : (
            <div onClick={() => setStateData(true)}>
              <p>Auto</p>
              <button onClick={() => clickAutoDate()}>Auto</button>
            </div>
          )}
        </div>
      </div>
      <DataUsers />
    </>
  );
};

export default TypesDocuments;
