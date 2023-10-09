import React, { useEffect, useState } from "react";
import styles from "./SelectServices.module.css";
import arrow_bottom from "../../../assets/images/orderPage/arrow_bottom.svg";
import arrow_top from "../../../assets/images/orderPage/arrow_top.svg";
import { useSelector } from "react-redux";

const SelectServices = ({ setCount }) => {
  const [lookSelect, setLookSelect] = useState(false);
  const [choiceLang, setChoiceLang] = useState("Editing");
  const { dataServices } = useSelector((state) => state.servicesPageSlice);

  const clickChoice = (title, id) => {
    setLookSelect(false);
    setChoiceLang(title);
    setCount(id);
  };

  const handleOutsideClick = (e) => {
    if (e.target.tagName === "SECTION" || e.target.tagName === "B") {
    } else {
      setLookSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={styles.selectServices}>
      <section
        className={styles.selectServices__from}
        onClick={() => setLookSelect(!lookSelect)}
      >
        <b
          className={
            choiceLang !== "" && lookSelect !== false ? styles.activeSelect : ""
          }
        >
          {choiceLang === "" ? props.initialText : choiceLang}
        </b>
        <section className="shadow"></section>
        <img
          src={arrow_bottom}
          style={
            lookSelect
              ? { transform: "rotate(180deg)", transition: ".7s" }
              : { transform: "rotate(0deg)", transition: ".7s" }
          }
          alt="arrow"
        />
      </section>
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
