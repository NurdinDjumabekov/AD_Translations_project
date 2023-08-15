import React from "react";
import styles from "./DataUsers.module.css";

export const DataUsers = () => {
  return (
    <div className={styles.blockData}>
      <label>
        <input type="email" placeholder="E-mail" />
      </label>
      <label>
        <input type="phone" placeholder="+996(700)754-454" />
      </label>
    </div>
  );
};
