import React from "react";
import styles from "./SliderIndustries.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const SliderIndustries = () => {
  const { dataIndustries } = useSelector((state) => state.servicesPageSlice);
  const { t } = useTranslation();
  console.log(dataIndustries, "dataIndustries");

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
    <div className={styles.sliderIndustries}>
      <h3 className="standartTitle">{t("Industries")}</h3>
      <div className="container">
        <div className={styles.sliderIndustries__inner}>
          <Slider {...settings}>
            {dataIndustries?.map((slid) => (
              <NavLink
                to={`/detailed/industries/${slid.id}`}
                className={styles.every_slide}
                key={slid.id}
              >
                <div className={styles.sliderIndustries__mainImg}>
                  <img src={slid.img} alt="img" />
                </div>
                <div className={styles.sliderIndustries__text}>
                  <h4>{slid.iconText}</h4>
                  <p>{slid.text}</p>
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderIndustries;
