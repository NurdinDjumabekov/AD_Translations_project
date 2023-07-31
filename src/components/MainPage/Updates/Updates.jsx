import React, { useEffect } from "react";
import styles from "./Updates.module.css";

const Updates = () => {
  useEffect(() => {}, []);
  const arrInfo = [
    {
      id: 1,
      title: "John Doe",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news"],
    },
    {
      id: 2,
      title: "John Doe",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news", "Translation", "Team", "news"],
    },
  ];
  return (
    <div className={styles.updates}>
      <h2>Latest Updates</h2>
      <div className={styles.updates__inner}>
        {arrInfo?.map((slide) => (
          <div key={slide.id}>
            <h3>{slide.title}</h3>
            <div>
              <img src={slide.img} alt="img" />
            </div>
            <p>{slide.text}</p>
            <div className={styles.updates__hashtag}>
              {slide.hashtag?.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
