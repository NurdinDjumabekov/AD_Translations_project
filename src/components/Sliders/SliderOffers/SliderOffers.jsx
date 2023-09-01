import React, { useEffect, useState } from "react";
import styles from "./SliderOffers.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../assets/images/mainPage/teams.svg";
import { useDispatch } from "react-redux";
import { toTakeDataUpdates } from "../../../store/reducers/mainPageSlice";

const SliderOffers = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toTakeDataUpdates());
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    dots: true, // Включаем индикаторы
    centerMode: false,
    variableWidth: true,
    // autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={styles.sliderOffers}>
      <h2 className="standartTitle">Latest Updates</h2>
      <div className="container">
        <div className={styles.sliderOffers__inner}>
          <Slider {...settings}>
            {data?.map((slide) => (
              <div key={slide.id}>
                <div className={styles.mainImg}>
                  <img src={slide.img} alt="картинка" />
                </div>
                <h5>{slide.title}</h5>
                <p>{slide.miniText}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderOffers;
