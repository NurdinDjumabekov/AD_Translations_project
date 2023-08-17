import React, { useEffect, useRef, useState } from "react";
import styles from "./DataForSend.module.css";
import { useSelector } from "react-redux";

const DataForSend = ({ doc, setDoc }) => {
  const inputRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(false);

  const clickSend = () => {
    inputRef.current.click();
  };
  const { typeDoc } = useSelector((state) => state.orderPageSlice);
  const { errorSend } = useSelector((state) => state.stateSendDataSlice);

  useEffect(() => {
    if (doc) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [doc]);

  //////////Documents/////////
  if (typeDoc === 1) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div
          className={`${styles.blockForSend} ${
            errorSend.doc ? styles.badInput : ""
          }`}
        >
          <p>Max: 5000 words</p>
          <input
            onChange={(e) => setDoc(e.target.files[0])}
            ref={inputRef}
            type="file"
          />
          <button
            onClick={clickSend}
            className={activeBtn ? styles.activeBtn : ""}
          >
            Upload files
          </button>
        </div>
      </div>
    );
    //////////Video/////////
  } else if (typeDoc === 2) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div
          className={`${styles.blockForSend} ${
            errorSend.doc ? styles.badInput : ""
          }`}
        >
          <p>Max: 5gb</p>
          <input
            onChange={(e) => setDoc(e.target.files[0])}
            ref={inputRef}
            type="file"
          />
          <button
            onClick={clickSend}
            className={activeBtn ? styles.activeBtn : ""}
          >
            Upload files
          </button>
        </div>
      </div>
    );
    //////////Audio/////////
  } else if (typeDoc === 3) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div
          className={`${styles.blockForSend} ${
            errorSend.doc ? styles.badInput : ""
          }`}
        >
          <p>Max: 5gb</p>
          <input
            onChange={(e) => setDoc(e.target.files[0])}
            ref={inputRef}
            type="file"
          />
          <button
            onClick={clickSend}
            className={activeBtn ? styles.activeBtn : ""}
          >
            Upload files
          </button>
        </div>
      </div>
    );
    //////////Link/////////
  } else if (typeDoc === 4) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div className={styles.linksBlock}>
          <input
            className={`${styles.linksInput} ${
              errorSend.doc ? styles.badInput : ""
            }`}
            onChange={(e) => setDoc(e.target.value)}
            type="text"
            placeholder="Paste a link"
          />
        </div>
      </div>
    );
  }
};

export default DataForSend;
