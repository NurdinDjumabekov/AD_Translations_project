import React, { useState } from "react";
import styles from "./SliderReviews.module.css";
import Slider from "react-slick";

const SliderReviews = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
    {
      id: 2,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
    {
      id: 3,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
    {
      id: 4,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
    {
      id: 5,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
    {
      id: 6,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
    {
      id: 7,
      title: "Sasha Misho",
      logo: "https://www.foodmakers.it/wp-content/uploads/2020/10/b2ap3_large_iospedisco.it_partner_di_glovo.jpg",
      img: "https://vsetreningi.ru/avatars/objects/8-77_1_6.jpg?b4222da8daa8c30cbca255f5e2b8eaec",
      text: "AD Translate's collaboration with Glovo resulted in the development of a cutting-edge translation system that revolutionized how the company handled its language localization needs. The newly implemented system not only provided maximum levels of quality, control, and cost-effectiveness but also offered several other significant advantages",
      date: "21.09.2023",
    },
  ]);

  // сократит данные до 7ми элементов

  const settings = {
    // infinite: true,
    slidesToShow: 2,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: false,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <div className={styles.sliderReviews}>
      <h2 className="standartTitle">Reviews</h2>
      <div className="container">
        <div className={styles.sliderReviews__inner}>
          <Slider {...settings}>
            {data?.map((slide) => (
              <div key={slide.id}>
                <div className={styles.sliderIndustries__mainImgs}>
                  <div className={styles.sliderIndustries__logo}>
                    <img src={slide.logo} alt="logo" />
                  </div>
                  <div className={styles.sliderIndustries__mainImg}>
                    <img src={slide.img} alt="user" />
                  </div>
                  <h5>{slide.title}</h5>
                </div>
                <p>{slide.text}</p>
                <span>{slide.date}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderReviews;
