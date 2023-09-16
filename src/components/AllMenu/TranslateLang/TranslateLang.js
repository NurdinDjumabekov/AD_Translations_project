import React from "react";
import i18n from "../../../i18n";

const TranslateLang = () => {
  const translateName = ["ru", "kg", "en"];

  const changeLang = (e, lang) => {
    i18n.changeLanguage(lang);
    // dispatch(changeLanguage(lang));
  };
  return (
    <>
      <li className={styles.traslationBtns}>
        {translateName.map((lang, ind) => (
          <button key={ind} onClick={(e) => changeLang(e, lang)}>
            {lang}
          </button>
        ))}
      </li>
    </>
  );
};

export default TranslateLang;
