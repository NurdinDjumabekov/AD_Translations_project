export const transformWord = (info) => {
  const newWord = `Новый заказ! \n \nServices : ${info.orderData.services}, \nindustries : ${info.orderData.industries}, \nсрок : ${info.orderData.date}, \nc языка : ${info.orderData.fromLang}, \nна язык : ${info.orderData.toLang}, \nemail : ${info.orderData.email}, \nnumber : ${info.orderData.phoneNum}`;
  return newWord;
};
