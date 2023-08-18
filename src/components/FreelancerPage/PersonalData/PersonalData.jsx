import React from "react";
import styles from "./PersonalData.module.css";

const PersonalData = () => {
  return (
    <div className={styles.personalData}>
      <span>Full name</span>
      <input
        type="text"
        placeholder="Enter your full name"
        className={styles.inputfullName}
      />
      <div>
        <div>
          <span>Email</span>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.inputEmail}
          />
        </div>
        <div>
          <span>Phone number (with country code)</span>
          <input
            type="text"
            placeholder="+996 (000) 000 - 000"
            className={styles.inputNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
