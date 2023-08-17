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

  const [date, setDate] = useState(true);
  const [dateNum, setDateNum] = useState("");

  const dispatch = useDispatch();
  const { orderData, typeDoc } = useSelector((state) => state.orderPageSlice);

  useEffect(() => {
    dispatch(
      changeOrderData({
        ...orderData,
        date: dateNum,
      })
    );
  }, [dateNum]);

  useEffect(() => {
    if (date === false) {
      setDateNum("auto");
    } else {
      setDateNum("");
    }
  }, [date]);

  const clickTypeDoc = (id) => {
    dispatch(changeTypeDoc(id));
    setDoc(null);
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
            initialText: "choose language",
          }}
        />
        <ChoiceSelect
          props={{ data, textAbove: "To", initialText: "choose language" }}
        />
      </div>
      <div className={styles.typeSendData}>
        <DataForSend doc={doc} setDoc={setDoc} />
        <div className={styles.sendDate}>
          <p>Deadline</p>
          {date ? (
            <label>
              <input
                onChange={(e) => setDateNum(e.target.value)}
                placeholder="DD.MM.YY"
                type="text"
                value={dateNum}
              />
              <button onClick={() => setDate(false)}>Auto</button>
            </label>
          ) : (
            <div onClick={() => setDate(true)}>
              <p>Auto</p>
              <button onClick={() => setDate(false)}>Auto</button>
            </div>
          )}
        </div>
      </div>
      <DataUsers />
    </>
  );
};

export default TypesDocuments;
