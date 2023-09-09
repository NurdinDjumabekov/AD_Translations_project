import React from "react";
import styles from "./SliderIndustries.module.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const SliderIndustries = () => {
  // сократит данные до 5ти элементов

  const { dataIndustries } = useSelector((state) => state.servicesPageSlice);

  // console.log(dataIndustries, "dataIndustries");
  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 300,
    dots: true,
    centerMode: false,
    variableWidth: true,
    // autoplaySpeed: 2000,
    // autoplay: true,
  };
  return (
    <div className={styles.sliderIndustries}>
      <h2 className="standartTitle">Industries</h2>
      <div className="container">
        <div className={styles.sliderIndustries__inner}>
          <Slider {...settings}>
            {dataIndustries?.slice(0, 5)?.map((item) => (
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
