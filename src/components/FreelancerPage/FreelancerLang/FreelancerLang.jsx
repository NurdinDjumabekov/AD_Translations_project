import React, { useEffect, useState } from "react";
import styles from "./FreelancerLang.module.css";
import { useDispatch, useSelector } from "react-redux";
import { arrLevels } from "../../../helpers/arrLevels";
import {
  changeSelectsLangFrom,
  changeSelectsLangTo,
} from "../../../store/reducers/stateSendDataSlice";
import backet from "../../../assets/images/servicesPage/basket.svg";
import LangSelectFrom from "../LangSelectFrom/LangSelectFrom";
import LangSelectTo from "../LangSelectTo/LangSelectTo";
import { updateForSelects } from "../../../helpers/updateForSelects";

const FreelancerLang = () => {
  const dispatch = useDispatch();
  const [langLevel, setLangLevel] = useState(arrLevels());
  const { allLang } = useSelector((state) => state.servicesPageSlice);
  // const [lang, setLang] = useState([]);

  const { selectsLangFrom, selectsLangTo } = useSelector(
    (state) => state.stateSendDataSlice
  );

  useEffect(() => {
    const selectsData = {
      id: 1,
      lang: updateForSelects(allLang, "allLang"),
      level: langLevel,
    };
    dispatch(changeSelectsLangFrom([selectsData]));
    dispatch(changeSelectsLangTo([selectsData]));
  }, [allLang]);

  const addSelects = (type) => {
    let sel, dispatchFN;
    if (type === "from") {
      sel = selectsLangFrom;
      dispatchFN = changeSelectsLangFrom;
    } else {
      sel = selectsLangTo;
      dispatchFN = changeSelectsLangTo;
    }
    if (sel[sel.length - 1].id === 3) {
      return sel;
    } else {
      dispatch(
        dispatchFN([
          ...sel,
          {
            id: sel[sel.length - 1].id + 1,
            lang: updateForSelects(allLang, "allLang"),
            level: langLevel,
          },
        ])
      );
    }
  };
  const deleteSelectFrom = () => {
    let data;
    if (selectsLangFrom.length > 1) {
      dispatch(
        changeSelectsLangFrom(
          (data = selectsLangFrom.filter((item) => {
            if (selectsLangFrom[selectsLangFrom.length - 1].id !== item.id) {
              return item;
            }
          }))
        )
      );
    }
  };
  const deleteSelectTo = () => {
    let data;
    if (selectsLangTo.length > 1) {
      dispatch(
        changeSelectsLangTo(
          (data = selectsLangTo.filter((item) => {
            if (selectsLangTo[selectsLangTo.length - 1].id !== item.id) {
              return item;
            }
          }))
        )
      );
    }
  };

  return (
    <div className={styles.freelancerLang}>
      <div className={styles.freelancerLang__from}>
        <p>Language (Translate From)</p>
        {selectsLangFrom?.map((item) => (
          <div className={styles.freelancerLang__inner} key={item.id}>
            <LangSelectFrom
              props={{
                data: item?.lang,
                type: "lang",
                initialText: "English",
                count: item?.id,
                traslationType: "from",
              }}
            />
            <LangSelectFrom
              props={{
                data: item?.level,
                type: "level",
                initialText: "A1",
                count: item?.id,
                traslationType: "from",
              }}
            />
            <button onClick={deleteSelectFrom} className={styles.deleteBtn}>
              <img src={backet} alt="x" />
            </button>
          </div>
        ))}
        <button
          className={styles.btnAddselect}
          onClick={() => addSelects("from")}
        >
          Add one more
        </button>
      </div>
      <div className={styles.freelancerLang__to}>
        <p>Language (Translate To)</p>
        {selectsLangTo?.map((item) => (
          <div className={styles.freelancerLang__inner} key={item.id}>
            <LangSelectTo
              props={{
                data: item.lang,
                type: "lang",
                initialText: "Russian",
                count: item.id,
                traslationType: "to",
              }}
            />
            <LangSelectTo
              props={{
                data: item.level,
                type: "level",
                initialText: "A1",
                count: item.id,
                traslationType: "to",
              }}
            />
            <button onClick={deleteSelectTo} className={styles.deleteBtn}>
              <img src={backet} alt="x" />
            </button>
          </div>
        ))}
        <button
          className={styles.btnAddselect}
          onClick={() => addSelects("to")}
        >
          Add one more
        </button>
      </div>
    </div>
  );
};

export default FreelancerLang;
