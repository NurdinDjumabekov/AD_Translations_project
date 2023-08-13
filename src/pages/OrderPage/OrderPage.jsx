import React from "react";
import styles from "./OrderPage.module.css";
import LanguageSelect from "../../components/OrderPage/LanguageSelect/LanguageSelect";

const OrderPage = () => {
  return (
    <div className={styles.order}>
      <div className="container">
        <h5>Translation</h5>
        <i>Fill in the features</i>
        <div className={styles.order__inner}>
          <LanguageSelect />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
