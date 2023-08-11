import React, { useEffect } from "react";
import styles from "./Updates.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    {
      id: 3,
      title: "John Doe",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news"],
    },
    {
      id: 4,
      title: "John Doe",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news", "Translation", "Team", "news"],
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.updates}>
      <h2 className="standartTitle">Latest Updates</h2>
      <div className="container">
        <div className={styles.updates__inner}>
          <Slider {...settings}>
            {arrInfo?.map((slide) => (
              <div key={slide.id}>
                {/* <h3>{slide.title}</h3>
                <div>
                  <img src={slide.img} alt="img" />
                </div>
                <p>{slide.text}</p>
                <div className={styles.updates__hashtag}>
                  {slide.hashtag?.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Updates;
