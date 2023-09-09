import React from "react";
import styles from "./Advantages.module.css";
import { useNavigate } from "react-router-dom";
import { AdvantagesData } from "../../../localData/data";

const Advantages = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__inner}>
          <h2 className="standartTitle">Our Advantages</h2>
          <ul className={styles.advantages__content}>
            {AdvantagesData?.map((item) => (
              <li key={item.id}>
                <div>
                  <span>0{item.id}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.lineBlock}></div>
      <button className="standartBtn" onClick={() => navigate("/order")}>
        Start Translation
      </button>
    </div>
  );
};

export default Advantages;
