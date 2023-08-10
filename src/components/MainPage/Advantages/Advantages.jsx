import React from "react";
import styles from "./Advantages.module.css";

const Advantages = () => {
  const data = [
    {
      id: 1,
      title: "High quality translation",
      text: "We ensure high accuracy in translations",
    },
    {
      id: 2,
      title: "High quality translation",
      text: "We ensure high accuracy in translations",
    },
    {
      id: 3,
      title: "High quality translation",
      text: "We ensure high accuracy in translations",
    },
    {
      id: 4,
      title: "High quality translation",
      text: "We ensure high accuracy in translations",
    },
  ];
  return (
    <div className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__inner}>
          <h2>Our Advantages</h2>
          <ul className={styles.advantages__content}>
            {data?.map((item) => (
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
      <button className="standartBtn">Start Translation</button>
    </div>
  );
};

export default Advantages;
