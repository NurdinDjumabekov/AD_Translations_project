import React from "react";
import styles from "./AboutUs.module.css";
import profi from "../../../assets/images/aboutPage/profi.png";
import teams from "../../../assets/images/aboutPage/teams.png";
import world from "../../../assets/images/aboutPage/world.png";

const AboutUs = () => {
  const arr = [
    {
      id: 1,
      title: "Coverage of Many Countries",
      text: "The purpose of localization is simple enough—speak the language to win business. Here at Native we know that behind every successful localization effort there is efficient project management. While translation, hiring resources, and smart tech integrations are a crucial part of localization projects, the real challenge is managing the process so the content sits right with the target market, gets delivered in time and you get the desired results without needless burnout.Look at it this way – we are fluent in 89 languages and true-blue natives of localization management with a deep understanding of the complexities of language, culture, and technology.",
      img: world,
    },
    {
      id: 2,
      title: "Experienced Professionals",
      text: "The purpose of localization is simple enough—speak the language to win business. Here at Native we know that behind every successful localization effort there is efficient project management. While translation, hiring resources, and smart tech integrations are a crucial part of localization projects, the real challenge is managing the process so the content sits right with the target market, gets delivered in time and you get the desired results without needless burnout.",
      img: profi,
    },
    {
      id: 3,
      title: "Solid Team",
      text: "The purpose of localization is simple enough—speak the language to win business. Here at Native we know that behind every successful localization effort there is efficient project management. While translation, hiring resources, and smart tech integrations are a crucial part of localization projects, the real challenge is managing the process so the content sits right with the target market, gets delivered in time and you get the desired results without needless burnout.Look at it this way – we are fluent in 89 languages and true-blue natives of localization management with a deep understanding of the complexities of language, culture, and technology.",
      img: teams,
    },
  ];

  return (
    <div className={styles.aboutUs}>
      <div className="container">
        <h4 className="standartTitle">About us</h4>
        <div className={styles.aboutUs__inner}>
          {arr.map((info) => (
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
