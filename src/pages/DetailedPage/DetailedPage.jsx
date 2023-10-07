import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { dataDetailedPage } from "../../store/reducers/detailedPageSlice";
import styles from "./DetailedPage.module.css";
import imgss from "./-./../../../assets/images/aboutPage/teams.png";
import arrow from "../../assets/images/cookie/arrow.svg";
import { useTranslation } from "react-i18next";

const DetailedPage = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { langData } = useSelector((state) => state.onServerSlice);
  const { everyLang } = useSelector((state) => state.detailedPageSlice);
  console.log(name, "name");
  console.log(id, "id");
  console.log(everyLang, "everyLang");

  useEffect(() => {
    dispatch(
      dataDetailedPage({
        url: `detailed/${name}/${id}`,
        lang: langData,
      })
    );
  }, [langData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arr = [
    {
      id: 1,
      title: "Text Translation",
      decsription:
        "AD Translations is a language services provider company that offers a wide range of language solutions to businesses, individuals, and government agencies around the world. We provide a variety of language services, including translation, on-site interpretation and phone interpretation, multilingual SEO, localization, voiceover, subtitling, transcription, dubbing, transcreation and other services.AD Translations was founded in 2011 by a team of experienced linguists and project managers who saw a need for high-quality language services in the global marketplace. Since then, our translation company has grown rapidly, expanding its services and client base to become a leading provider of language services worldwide.",
      img: imgss,
    },
    {
      id: 2,
      title: "Video Translation",
      decsription:
        "This website uses cookies to better the users experience while visiting the website. Where applicable this website uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for websites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user’s computer / device. Cookies are small files saved to the user’s computers hard drive that track, save and store information about the user’s interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website.Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors.This website uses tracking software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information. You can read Google’s privacy policy here for further information [ http://www.google.com/privacy.html ]. Other cookies may be stored to your computers hard drive by external vendors when this website uses referral programs, sponsored links or adverts. Such cookies are used for conversion and referral tracking and typically expire after 30 days, though some may take longer. No personal information is stored, saved or collected.",
      img: imgss,
    },
    {
      id: 3,
      title: "Text Translation",
      decsription:
        "AD Translations is a language services provider company that offers a wide range of language solutions to businesses, individuals, and government agencies around the world. We provide a variety of language services, including translation, on-site interpretation and phone interpretation, multilingual SEO, localization, voiceover, subtitling, transcription, dubbing, transcreation and other services.AD Translations was founded in 2011 by a team of experienced linguists and project managers who saw a need for high-quality language services in the global marketplace. Since then, our translation company has grown rapidly, expanding its services and client base to become a leading provider of language services worldwide.",
      img: arrow,
    },
  ];

  return (
    <div className={styles.detailed}>
      <div className="container">
        <div className={styles.detailed__parent}>
          <h4 className="standartTitle">Grench</h4>
          <div className="addBlockNav">
            <NavLink to={"/services"} className="prevPage">
              {t("Services")}
            </NavLink>
            <img className="arrowPage" src={arrow} alt="" />
            {name === "language" ? (
              <NavLink className="nextPage">{t("languages")}</NavLink>
            ) : (
              <NavLink className="nextPage">{t("Industries")}</NavLink>
            )}
          </div>
          <div className={styles.detailed__innner}>
            {arr?.map((i, index) => (
              <div className={styles.detailed__every} key={index}>
                <div
                  className={styles.detailed__img}
                  style={index % 2 === 0 ? { order: 1 } : { order: 2 }}
                >
                  <img src={i.img} alt="Картинка" />
                </div>
                <div
                  className={styles.detailed__text}
                  style={index % 2 === 0 ? { order: 2 } : { order: 1 }}
                >
                  <h5>{i.title}</h5>
                  <p>{i.decsription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
