import React, { useEffect, useState } from "react";
import styles from "./FreelancerLang.module.css";
import ChoiceSelect from "../../OrderPage/ChoiceSelect/ChoiceSelect";
import { useDispatch, useSelector } from "react-redux";
import { toTakeLanguage } from "../../../store/reducers/dataSelectSlice";
import { arrLevels } from "../../../helpers/arrLevels";

const FreelancerLang = () => {
  const dispatch = useDispatch();
  const [langLevel, setLangLevel] = useState(arrLevels());
  const { typeLanguage } = useSelector((state) => state.dataSelectSlice);

  useEffect(() => {
    dispatch(toTakeLanguage());
  }, []);

  const [arr, setArr] = useState([
    {
      id: 1,
      lang: (
        <ChoiceSelect
          props={{
            data: typeLanguage,
            textAbove: "",
            initialText: "English",
          }}
        />
      ),
      level: (
        <ChoiceSelect
          props={{
            data: langLevel,
            textAbove: "",
            initialText: "A1",
          }}
        />
      ),
    },
  ]);

  const addSelect = () => {
    setArr((info) => [
      ...info,
      {
        id: 2,
        lang: (
          <ChoiceSelect
            props={{
              data: typeLanguage,
              textAbove: "",
              initialText: "English",
            }}
          />
        ),
        level: (
          <ChoiceSelect
            props={{
              data: langLevel,
              textAbove: "",
              initialText: "A1",
            }}
          />
        ),
      },
    ]);
  };
  console.log(arr);

  return (
    <div className={styles.freelancerLang}>
      <div className={styles.freelancerLang__from}>
        <p>Language (Translate From)</p>
        {arr?.map((item) => (
          <div key={item.id}>
            {item.lang}
            {item.level}
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
            {item.lang}
            {item.level}
          </div>
        ))}
        {/* <button className={styles.btnAddselect}>Add one more</button> */}
      </div>
    </div>
  );
};

export default FreelancerLang;
