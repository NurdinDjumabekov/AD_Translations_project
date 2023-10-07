import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataDetailedPage } from "../../store/reducers/detailedPageSlice";
import styles from "./DetailedPage.module.css";
import imgss from "./-./../../../assets/images/aboutPage/profi.png";

const DetailedPage = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const { langData } = useSelector((state) => state.onServerSlice);
  const { everyLang } = useSelector((state) => state.detailedPageSlice);
  console.log(name, "name");
  console.log(id, "id");

  // useEffect(() => {
  //   dispatch(dataDetailedPage({ url: `ss${id}`, lang: langData }));
  // }, [langData]);

  const arr = [
    {
      id: 1,
      title: "Language",
      decsription:
        "AD Translations is a language services provider company that offers a wide range of language solutions to businesses, individuals, and government agencies around the world. We provide a variety of language services, including translation, on-site interpretation and phone interpretation, multilingual SEO, localization, voiceover, subtitling, transcription, dubbing, transcreation and other services.AD Translations was founded in 2011 by a team of experienced linguists and project managers who saw a need for high-quality language services in the global marketplace. Since then, our translation company has grown rapidly, expanding its services and client base to become a leading provider of language services worldwide.",
      img: imgss,
    },
    {
      id: 2,
      title: "Language",
      decsription:
        "AD Translations is a language services provider company that offers a wide range of language solutions to businesses, individuals, and government agencies around the world. We provide a variety of language services, including translation, on-site interpretation and phone interpretation, multilingual SEO, localization, voiceover, subtitling, transcription, dubbing, transcreation and other services.AD Translations was founded in 2011 by a team of experienced linguists and project managers who saw a need for high-quality language services in the global marketplace. Since then, our translation company has grown rapidly, expanding its services and client base to become a leading provider of language services worldwide.",
      img: imgss,
    },
  ];

  return (
    <div className={styles.detailed}>
      <h4>Grench</h4>
      <div className={styles.detailed__innner}>
        {arr?.map((i) => (
          <div className={styles.detailed__every}>
            <div className={styles.detailed__img}>
              <img src={i.img} alt="Картинка" />
            </div>
            <div className={styles.detailed__text}>
              <h5>{i.title}</h5>
              <p>{i.decsription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedPage;
