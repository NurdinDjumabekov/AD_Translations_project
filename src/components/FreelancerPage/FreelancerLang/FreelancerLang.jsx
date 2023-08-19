import React, { useEffect, useState } from "react";
import styles from "./FreelancerLang.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toTakeLanguage } from "../../../store/reducers/dataSelectSlice";
import { arrLevels } from "../../../helpers/arrLevels";
import LangSelect from "../LangSelect/LangSelect";

const FreelancerLang = ({ typeLanguage }) => {
  const dispatch = useDispatch();
  const [langLevel, setLangLevel] = useState(arrLevels());
  const [arr, setArr] = useState([]);

  useEffect(() => {
    dispatch(toTakeLanguage());
  }, []);

  useEffect(() => {
    if (typeLanguage && typeLanguage.length > 0) {
      setArr([
        {
          id: 1,
          lang: typeLanguage,
          level: langLevel,
        },
      ]);
    }
  }, [typeLanguage]);

  const addSelect = () => {
    if (arr[arr.length - 1].id === 3) {
      return arr;
    } else {
      setArr((info) => [
        ...info,
        {
          id: arr[arr.length - 1].id + 1,
          lang: typeLanguage,
          level: langLevel,
        },
      ]);
    }
  };

  return (
    <div className={styles.freelancerLang}>
      <div className={styles.freelancerLang__from}>
        <p>Language (Translate From)</p>
        {arr?.map((item) => (
          <div key={item.id}>
            <LangSelect
              props={{
                data: item.lang,
                type: "lang",
                initialText: "English",
                count: item.id,
                traslationType: "from",
              }}
            />
            <LangSelect
              props={{
                data: item.level,
                type: "level",
                initialText: "A1",
                count: item.id,
                traslationType: "from",
              }}
            />
          </div>
        ))}
        <button className={styles.btnAddselect} onClick={() => addSelect()}>
          Add one more
        </button>
      </div>
      <div className={styles.freelancerLang__to}>
        <p>Language (Translate To)</p>
        {arr?.map((item) => (
          <div key={item.id}>
            <LangSelect
              props={{
                data: item.lang,
                type: "lang",
                initialText: "Russian",
                count: item.id,
                traslationType: "to",
              }}
            />
            <LangSelect
              props={{
                data: item.level,
                type: "level",
                initialText: "A1",
                count: item.id,
                traslationType: "to",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerLang;
