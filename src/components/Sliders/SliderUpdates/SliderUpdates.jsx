import React, { useEffect, useState } from "react";
import styles from "./SliderUpdates.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../assets/images/mainPage/teams.svg";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDataUpdates } from "../../../store/reducers/mainPageSlice";
import { useTranslation } from "react-i18next";

const SliderUpdates = () => {
  const dispatch = useDispatch();

  const { dataUpdates } = useSelector((state) => state.mainPageSlice);
  // console.log(dataUpdates, "dataUpdates");

  const { t } = useTranslation();

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
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={styles.updates}>
      <h2 className="standartTitle">{t("LatestUpdates")}</h2>
      <div className="container">
        <div className={styles.updates__inner}>
          <Slider {...settings}>
            {dataUpdates?.map((slide) => (
              <div key={slide.id}>
                <div className={styles.updates__iconsContent}>
                  <div className={styles.updates__iconImg}>
                    <img src={image} alt="" />
                  </div>
                  <div className={styles.updates__iconTexts}>
                    <h3>{slide.title}</h3>
                    <p>{slide.iconText}</p>
                  </div>
                </div>
                <div className={styles.updates__mainImg}>
                  <img src={slide.img} alt="img" />
                </div>
                <p>{slide.text}</p>
                <div className={styles.updates__hashtag}>
                  {slide.hashtag?.slice(0, 4).map((item) => (
                    <p key={item.id}>{item?.name}</p>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderUpdates;
