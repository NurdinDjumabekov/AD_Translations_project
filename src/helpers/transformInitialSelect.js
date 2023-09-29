export const transformInitialSelect = (ru, en, kg, lang) => {
  if (lang === "ru") {
    return ru;
  } else if (lang === "kg") {
    console.log(lang);
    return kg;
  } else if (lang === "en") {
    return en;
  }
};
