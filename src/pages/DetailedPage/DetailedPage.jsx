import React, { useEffect, useState } from "react";
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

  return (
    <div className={styles.detailed}>
      <div className="container">
        <div className={styles.detailed__parent}>
          <h4 className="standartTitle">
            {name === "languages" ? everyLang?.name : everyLang?.iconText}
          </h4>
          <div className="addBlockNav">
            <NavLink to={"/services"} className="prevPage">
              {t("Services")}
            </NavLink>
            <img className="arrowPage" src={arrow} alt="" />
            {name === "languages" ? (
              <NavLink className="nextPage">{t("languages")}</NavLink>
            ) : (
              <NavLink className="nextPage">{t("Industries")}</NavLink>
            )}
          </div>
          {everyLang?.[
            name === "languages" ? "detaillanguage" : "detailindustry"
          ]?.length === 0 ? (
            <p className={styles.noneData}>{t("noneData")}</p>
          ) : (
            <div className={styles.detailed__innner}>
              {everyLang?.[
                name === "languages" ? "detaillanguage" : "detailindustry"
              ]?.map((i) => (
                <div className={styles.detailed__every} key={i.id}>
                  {i?.img === null ? (
                    <></>
                  ) : (
                    <div
                      className={styles.detailed__img}
                      style={i.id % 2 === 0 ? { order: 2 } : { order: 1 }}
                    >
                      <img src={i.img} alt="Картинка" />
                    </div>
                  )}
                  <div
                    className={styles.detailed__text}
                    style={i.id % 2 === 0 ? { order: 1 } : { order: 2 }}
                  >
                    <h5 style={i?.img === null ? { textAlign: "center" } : {}}>
                      {i.subtitle}
                    </h5>
                    <p>{i.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
