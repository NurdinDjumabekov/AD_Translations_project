import React from "react";
import styles from "./AboutUs.module.css";
import { aboutUsData } from "../../../localData/data";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className="container">
        <h2 className="standartTitle">About us</h2>
        <div className={styles.aboutUs__inner}>
          {aboutUsData?.map((info) => (
            <div key={info.id}>
              <div
                className={+info.id % 2 === 0 ? styles.aboutUs__content : ""}
              >
                <h4>{info.title}</h4>
                <p>{info.text}</p>
              </div>
              <div>
                <img src={info.img} alt="world" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
