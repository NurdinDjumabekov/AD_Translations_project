import React, { useRef } from "react";
import styles from "./DataForSend.module.css";

const DataForSend = ({ type }) => {
  const inputRef = useRef(null);

  const clickSend = () => {
    inputRef.current.click();
  };
  //////////Documents/////////
  if (type === 1) {
    return (
      <div>
        <span className={styles.sendTitle}>Document</span>
        <div className={styles.blockForSend}>
          <p>Max: 5000 words</p>
          <input ref={inputRef} type="file" />
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
          <input ref={inputRef} type="file" />
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
          <input ref={inputRef} type="file" />
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
            type="text"
            placeholder="Paste a link"
          />
        </div>
      </div>
    );
  }
};

export default DataForSend;
