export const arrangementData = (obj) => {
  let text = "";
  let textFromLang = "";
  let textToLang = "";
  if ("lang1" && "lang2" && "lang3" in obj.fromLang) {
    textFromLang = `${obj.fromLang.lang1.lang}(${obj.fromLang.lang1.levelLang}), ${obj.fromLang.lang2.lang}(${obj.fromLang.lang2.levelLang}), ${obj.fromLang.lang3.lang}(${obj.fromLang.lang3.levelLang})`;
  } else if ("lang1" && "lang2" in obj.fromLang) {
    textFromLang = `${obj.fromLang.lang1.lang}(${obj.fromLang.lang1.levelLang}), ${obj.fromLang.lang2.lang}(${obj.fromLang.lang2.levelLang})`;
  } else {
    textFromLang = `${obj.fromLang.lang}(${obj.fromLang.levelLang}) `;
  }
  if ("lang1" && "lang2" && "lang3" in obj.toLang) {
    textToLang = `${obj.toLang.lang1.lang}(${obj.toLang.lang1.levelLang}), ${obj.toLang.lang2.lang}(${obj.toLang.lang2.levelLang}), ${obj.toLang.lang3.lang}(${obj.toLang.lang3.levelLang}) `;
  } else if ("lang1" && "lang2" in obj.toLang) {
    textToLang = `${obj.toLang.lang1.lang}(${obj.toLang.lang1.levelLang}), ${obj.toLang.lang2.lang}(${obj.toLang.lang2.levelLang})`;
  } else {
    textToLang = `${obj.toLang.lang}(${obj.toLang.levelLang}) `;
  }
  text = `Translate From: ${textFromLang} \nTranslate To: ${textToLang}`;
  return text;
};
