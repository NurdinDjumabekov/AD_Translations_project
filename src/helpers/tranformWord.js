export const transformWord = (info) => {
  const newWord = `Новый заказ! \n \nServices : ${info?.choiceLang.services}, \nindustries : ${info?.choiceLang.industries}, \nсрок : ${info.orderData.date}, \nc языка : ${info?.choiceLang.fromLang}, \nна язык : ${info?.choiceLang.toLang}, \nemail : ${info.orderData.email}, \nnumber : ${info.orderData.phoneNum}`;
  return newWord;
};
