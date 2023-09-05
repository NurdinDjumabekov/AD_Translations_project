import React, { useEffect, useState } from "react";
import styles from "./Languages.module.css";
import { sortLanguages } from "../../../helpers/sortLanguages";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toTakeAllLang } from "../../../store/reducers/servicesPageSlice";

const Languages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [dataAdaptation, setDataAdaptation] = useState([]);
  useEffect(() => {
    setData(sortLanguages()[0]); // в helpers зайди, там всё ясно будет
    setDataAdaptation(sortLanguages()[1]);
  }, []);
  console.log(dataAdaptation);
  const lengNum = Math.ceil(dataAdaptation.length / 2);

  return (
    <div className={styles.languages}>
      <div className="container">
        <h4 className="standartTitle">Languages</h4>
        <div className={styles.languages__inner}>
          <div>
            {data[0]?.map((item) => (
              <div
                className={item.letter !== "" ? styles.pushContent : ""}
                key={item.id}
              >
                <p>{item.letter}</p>
                <span>{item.title}</span>
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
                <span>{item.title}</span>
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
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        {/* //////для адаптивки */}
        <div className={styles.adaptationLanguages}>
          <div>
            {dataAdaptation.slice(0, lengNum).map((i) => (
              <p key={i.id}>{i.title}</p>
            ))}
          </div>
          <div>
            {dataAdaptation.slice(lengNum, dataAdaptation?.length).map((i) => (
              <p key={i.id}>{i.title}</p>
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
