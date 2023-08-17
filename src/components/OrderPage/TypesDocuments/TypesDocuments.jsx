import React, { useEffect, useState } from "react";
import styles from "./TypesDocuments.module.css";
import ChoiceSelect from "../ChoiceSelect/ChoiceSelect";
import DataForSend from "../DataForSend/DataForSend";
import { DataUsers } from "../DataUsers/DataUsers";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderData,
  changeTypeDoc,
} from "../../../store/reducers/orderPageSlice";

const TypesDocuments = ({ doc, data, setDoc }) => {
  const typeData = [
    {
      doc: "Documents",
      id: 1,
    },
    {
      doc: "Video",
      id: 2,
    },
    {
      doc: "Audio",
      id: 3,
    },
    {
      doc: "Link",
      id: 4,
    },
  ];

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

  const clickTypeDoc = (id) => {
    dispatch(changeTypeDoc(id));
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
        {typeData.map((btn) => (
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
              <input
                className={errorSend.date ? styles.badInput : ""}
                onChange={(e) =>
                  dispatch(
                    changeOrderData({
                      ...orderData,
                      date: e.target.value,
                    })
                  )
                }
                placeholder="DD.MM.YY"
                type="text"
                value={orderData.date}
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
