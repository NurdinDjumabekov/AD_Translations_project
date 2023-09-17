import React, { useEffect, useState } from "react";
import styles from "./Languages.module.css";
import { sortLanguages } from "../../../helpers/sortLanguages";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataAdaptation, setDataAdaptation] = useState([]);
  const { allLang } = useSelector((state) => state.servicesPageSlice);
  useEffect(() => {
    setData(sortLanguages(allLang)[0]); // в helpers зайди, там всё ясно будет
    setDataAdaptation(sortLanguages(allLang)[1]);
  }, [allLang]);
  const lengNum = Math.ceil(dataAdaptation.length / 2);

  const { t } = useTranslation();

  return (
    <div className={styles.languages}>
      <div className="container">
        <h4 className="standartTitle">{t("language")}</h4>
        <div className={styles.languages__inner}>
          <div>
            {data[0]?.map((item) => (
              <div
                className={item.letter !== "" ? styles.pushContent : ""}
                key={item.id}
              >
                <p>{item.letter}</p>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div>
            {data[1]?.map((item) => (
              <div
                className={item.letter !== "" ? styles.pushContent : ""}
                key={item.id}
              >
                <p>{item.letter}</p>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div>
            {data[2]?.map((item) => (
              <div
                key={item.id}
                className={item.letter !== "" ? styles.pushContent : ""}
              >
                <p>{item.letter}</p>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* //////для адаптивки */}
        <div className={styles.adaptationLanguages}>
          <div>
            {dataAdaptation.slice(0, lengNum).map((i) => (
              <p key={i.id}>{i.name}</p>
            ))}
          </div>
          <div>
            {dataAdaptation.slice(lengNum, dataAdaptation?.length).map((i) => (
              <p key={i.id}>{i.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="lineBlock"></div>
      <button className="standartBtn" onClick={() => navigate("/order")}>
        Start Translation
      </button>
    </div>
  );
};

export default Languages;
