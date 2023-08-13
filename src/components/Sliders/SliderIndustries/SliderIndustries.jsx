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

  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={styles.sliderIndustries}>
      <h2 className="standartTitle">Industries</h2>
      <div className="container">
        <div className={styles.sliderIndustries__inner}>
          <Slider {...settings}>
            {data?.map((slide) => (
              <div key={slide.id}>
                <div className={styles.sliderIndustries__mainImg}>
                  <img src={slide.img} alt="" />
                </div>
                <div className={styles.sliderIndustries__text}>
                  <h4>{slide.iconText}</h4>
                  <p>{slide.text}</p>
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
