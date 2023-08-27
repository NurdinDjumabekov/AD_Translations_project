/// для адаптивки

import React, { useEffect, useState } from "react";
import styles from "./SelectServices.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useDispatch, useSelector } from "react-redux";

const SelectServices = ({ setCount }) => {
  const dispatch = useDispatch();
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState("Editing");
  const { dataServices } = useSelector((state) => state.servicesPageSlice);

  console.log(dataServices, "dataServices");

  const clickChoice = (title, id) => {
    setLookSelect(false);
    setChoiceLang(title);
    setCount(id);
  };

  return (
    <div className={styles.selectServices}>
      <div
        className={styles.selectServices__from}
        onClick={() => setLookSelect(!lookSelect)}
      >
        <p
          className={
            choiceLang !== "" && lookSelect !== false ? styles.activeSelect : ""
          }
        >
          {choiceLang === "" ? props.initialText : choiceLang}
        </p>
        {lookSelect ? (
          <img src={arrow_top} alt="arrow" />
        ) : (
          <img src={arrow_bottom} alt="arrow" />
        )}
      </div>
      {lookSelect && (
        <div className={styles.choiceSelect}>
          {dataServices?.map((i) => (
            <p
              key={i.id}
              onClick={() => clickChoice(i.title, i.id)}
              className={i.choice === choiceLang ? styles.activeSelect : ""}
            >
              {i.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectServices;
