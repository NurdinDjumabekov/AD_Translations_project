export const choiceTypeLang = (lang, type) => {
  let text = "";
  switch (lang) {
    case "ru":
      text = "Энерги";
    case "ky":
      text = "";
    case "en":
      text = "Energ";
  }
  return text;
};
