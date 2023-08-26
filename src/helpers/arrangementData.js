export const arrangementData = (obj) => {
  let text = "";
  let textFromLang = "";
  let textToLang = "";
  if ("langOne" && "langTwo" && "langThree" in obj.fromLang) {
    textFromLang = `${obj.fromLang.langOne.lang}(${obj.fromLang.langOne.levelLang}), ${obj.fromLang.langTwo.lang}(${obj.fromLang.langTwo.levelLang}), ${obj.fromLang.langThree.lang}(${obj.fromLang.langThree.levelLang})`;
  } else if ("langOne" && "langTwo" in obj.fromLang) {
    textFromLang = `${obj.fromLang.langOne.lang}(${obj.fromLang.langOne.levelLang}), ${obj.fromLang.langTwo.lang}(${obj.fromLang.langTwo.levelLang})`;
  } else {
    textFromLang = `${obj.fromLang.lang}(${obj.fromLang.levelLang}) `;
  }
  if ("langOne" && "langTwo" && "langThree" in obj.toLang) {
    textToLang = `${obj.toLang.langOne.lang}(${obj.toLang.langOne.levelLang}), ${obj.toLang.langTwo.lang}(${obj.toLang.langTwo.levelLang}), ${obj.toLang.langThree.lang}(${obj.toLang.langThree.levelLang}) `;
  } else if ("langOne" && "langTwo" in obj.toLang) {
    textToLang = `${obj.toLang.langOne.lang}(${obj.toLang.langOne.levelLang}), ${obj.toLang.langTwo.lang}(${obj.toLang.langTwo.levelLang})`;
  } else {
    textToLang = `${obj.toLang.lang}(${obj.toLang.levelLang}) `;
  }
  text = `Translate From: ${textFromLang} \nTranslate To: ${textToLang}`;
  return text;
};
