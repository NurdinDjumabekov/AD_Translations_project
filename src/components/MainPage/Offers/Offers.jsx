import React from "react";
import styles from "./Offers.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const Offers = () => {
  const { t } = useTranslation();
  const { ourOffers } = useSelector((state) => state.mainPageSlice);
  // console.log(ourOffers, "ourOffers");

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
    // autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="container">
        <div className={styles.offers}>
          <h2 className="standartTitle">{t("Our offers")}</h2>
          <div className={styles.offers__inner}>
            {ourOffers?.slice(0, 6).map((card) => (
              <div
                className={card.bool ? styles.activeBlock : ""}
                key={card.id}
                onClick={() => lookMoreData(card.id)}
              >
                <div>
                  <img src={card.img} alt="" />
                </div>
                <h4>{t(card.title)}</h4>
                <p className={styles.activeP}>{t(card.miniText)}</p>
              </div>
            ))}
          </div>
          <button className="standartBtn">{t("btn_our_offer")}</button>
        </div>
        {/* /////////////////для mobile////////////// */}
        <div className={styles.offers__slider}>
          <h2 className="standartTitle">{t("Our offers")}</h2>

          <Slider {...settings}>
            {ourOffers?.slice(0, 6).map((slide) => (
              <div
                className={styles.slider_every}
                key={slide.id}
                onClick={() => lookMoreData(carslided.id)}
              >
                <div className={styles.slider_every__inner}>
                  <div className={styles.slider_every_img}>
                    <img src={slide.img} alt="card" />
                  </div>
                  <h4>{t(slide.title)}</h4>
                  <p>{t(slide.miniText)}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Offers;
