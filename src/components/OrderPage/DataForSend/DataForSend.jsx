import React, { useEffect, useRef, useState } from "react";
import styles from "./DataForSend.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderData } from "../../../store/reducers/orderPageSlice";

const DataForSend = ({ type }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { orderData } = useSelector((state) => state.orderPageSlice);

  const [doc, setDoc] = useState(null);

  const clickSend = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    dispatch(
      changeOrderData({
        ...orderData,
        document: doc,
      })
    );
  }, [doc]);

  // console.log(doc);
  //////////Documents/////////
  if (type === 1) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div className={styles.blockForSend}>
          <p>Max: 5000 words</p>
          <input
            onChange={(e) => setDoc(e.target.files[0])}
            ref={inputRef}
            type="file"
          />
          <button onClick={clickSend}>Upload files</button>
        </div>
      </div>
    );
    //////////Video/////////
  } else if (type === 2) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div className={styles.blockForSend}>
          <p>Max: 5gb</p>
          <input
            onChange={(e) => setDoc(e.target.files[0])}
            ref={inputRef}
            type="file"
          />
          <button onClick={clickSend}>Upload files</button>
        </div>
      </div>
    );
    //////////Audio/////////
  } else if (type === 3) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div className={styles.blockForSend}>
          <p>Max: 5gb</p>
          <input
            onChange={(e) => setDoc(e.target.files[0])}
            ref={inputRef}
            type="file"
          />
          <button onClick={clickSend}>Upload files</button>
        </div>
      </div>
    );
    //////////Link/////////
  } else if (type === 4) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div className={styles.linksBlock}>
          <input
            className={styles.linksInput}
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
