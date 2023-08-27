import React, { useState } from "react";
import styles from "./SliderIndustries.module.css";
import Slider from "react-slick";

const SliderIndustries = () => {
  const [data, setData] = useState([
    {
      id: 1,
      iconText:
        "Marketplace for ordering ands dlas hdahsdhashdlhas hdlas sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
    {
      id: 2,
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
    {
      id: 3,
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
    {
      id: 4,
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
    {
      id: 5,
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
    {
      id: 6,
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
    {
      id: 7,
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
    },
  ]);

  // сократит данные до 7ми элементов

  const mySetting = {
    infinite: true,
    slidesToShow: 4,
    speed: 300,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
    variableWidth: true,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <div className={styles.sliderIndustries}>
      <h2 className="standartTitle">Industries</h2>
      <div className="container">
        <div className={styles.sliderIndustries__inner}>
          <Slider {...mySetting}>
            {data?.slice(0, 6)?.map((item) => (
              <div key={item.id}>
                <div className={styles.sliderIndustries__mainImg}>
                  <img src={item.img} alt="img" />
                </div>
                <div className={styles.sliderIndustries__text}>
                  <h4>{item.iconText}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderIndustries;
