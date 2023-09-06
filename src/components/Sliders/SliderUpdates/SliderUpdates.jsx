import React, { useEffect, useState } from "react";
import styles from "./SliderUpdates.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../../assets/images/mainPage/teams.svg";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDataUpdates } from "../../../store/reducers/mainPageSlice";

const SliderUpdates = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([
    {
      id: 1,
      title: "John Doe1",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.jasjd lalsjdlkajks jdasldkasldal jldjaklsdkasldhashdahs dhalshdklashl l l l  ld o jaod joas jodjasdaps",
      hashtag: ["Translation", "Team", "news"],
      icon: image,
    },
    {
      id: 2,
      title: "John Doe2",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news", "Translation", "Team"],
      icon: image,
    },
    {
      id: 3,
      title: "John Doe3",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news"],
      icon: image,
    },
    {
      id: 4,
      title: "John Doe4",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news", "Translation", "Team", "news"],
      icon: image,
    },
    {
      id: 5,
      title: "John Doe5",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news", "Translation", "Team", "news"],
      icon: image,
    },
    {
      id: 6,
      title: "John Doe6",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news"],
      icon: image,
    },
    {
      id: 7,
      title: "John Doe7",
      iconText: "Marketplace for ordering and sending goods",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "Exciting news! We have expanded our translation services to include more languages.",
      hashtag: ["Translation", "Team", "news", "Translation", "Team", "news"],
      icon: image,
    },
  ]);

  const { dataUpdates } = useSelector((state) => state.mainPageSlice);
  console.log(dataUpdates, "dataUpdates");

  useEffect(() => {
    setData(data?.slice(0, 5));
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
    <div className={styles.updates}>
      <h2 className="standartTitle">Latest Updates</h2>
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
