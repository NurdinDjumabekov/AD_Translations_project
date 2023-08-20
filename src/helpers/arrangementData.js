export const arrangementData = (obj) => {
  let text = "";
  //   console.log(obj.fromLang);
  if ("langOne" && "langTwo" && "langThree" in obj.fromLang) {
    text = `${obj.fromLang.langOne.lang}(${obj.fromLang.langOne.levelLang}) --- ${obj.toLang.langOne.lang}(${obj.toLang.langOne.levelLang}), \n${obj.fromLang.langTwo.lang}(${obj.fromLang.langTwo.levelLang}) --- ${obj.toLang.langTwo.lang}(${obj.toLang.langTwo.levelLang}) , \n${obj.fromLang.langThree.lang}(${obj.fromLang.langThree.levelLang}) --- ${obj.toLang.langThree.lang}(${obj.toLang.langThree.levelLang})`;
    return text;
  } else if ("langOne" && "langTwo" in obj.fromLang) {
    text = `${obj.fromLang.langOne.lang}(${obj.fromLang.langOne.levelLang}) --- ${obj.toLang.langOne.lang}(${obj.toLang.langOne.levelLang}), \n${obj.fromLang.langTwo.lang}(${obj.fromLang.langTwo.levelLang}) --- ${obj.toLang.langTwo.lang}(${obj.toLang.langTwo.levelLang})`;
    return text;
  } else {
    text = `${obj.fromLang.lang}(${obj.fromLang.levelLang}) --- ${obj.toLang.lang}(${obj.toLang.levelLang})`;
    return text;
  }

  return text;
};
