import React from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";

const OrderPage = () => {
  const data = [
    {
      choice: "Arabic",
      id: 1,
    },
    {
      choice: "Azerbaijani",
      id: 2,
    },
    {
      choice: "Czech",
      id: 3,
    },
    {
      choice: "English",
      id: 4,
    },
    {
      choice: "German",
      id: 5,
    },
    {
      choice: "Hindi",
      id: 6,
    },
    {
      choice: "Irish",
      id: 7,
    },
    {
      choice: "Italian",
      id: 8,
    },
  ];

  return (
    <div className={styles.order}>
      <div className="container">
        <h5>Translation</h5>
        <i>Fill in the features</i>
        <div className={styles.order__inner}>
          <div className={styles.order__services}>
            <ChoiceSelect
              props={{
                data,
                textAbove: "Services",
                initialText: "Editing",
              }}
            />
            <ChoiceSelect
              props={{
                data,
                textAbove: "Industries",
                initialText: "General",
              }}
            />
          </div>
          <TypesDocuments data={data} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
