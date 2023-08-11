import React from "react";
import styles from "./Industries.module.css";
import SliderIndustries from "../../Sliders/SliderIndustries/SliderIndustries";

const Industries = () => {
  return (
    <div className={styles.industries}>
      <div className="container">
        <div className={styles.industries__inner}>
          <SliderIndustries />
        </div>
      </div>
    </div>
  );
};

export default Industries;
