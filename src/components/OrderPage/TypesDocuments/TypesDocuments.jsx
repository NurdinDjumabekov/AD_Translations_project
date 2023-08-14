import React, { useState } from "react";
import styles from "./TypesDocuments.module.css";
import ChoiceSelect from "../ChoiceSelect/ChoiceSelect";
import DataForSend from "../DataForSend/DataForSend";
import { DataUsers } from "../DataUsers/DataUsers";

const TypesDocuments = ({ data }) => {
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
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(true);

  return (
    <>
      <div className={styles.docType}>
        {typeData.map((btn) => (
          <button
            onClick={() => setCount(btn.id)}
            className={btn.id === count ? styles.activeBtn : ""}
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
        <DataForSend type={count} />
        <div className={styles.sendDate}>
          <p>Deadline</p>
          {date ? (
            <label>
              <input placeholder="DD.MM.YY" type="text" />
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
