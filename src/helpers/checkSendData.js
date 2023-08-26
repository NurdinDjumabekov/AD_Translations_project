export const checkSendData = (data) => {
  let obj;
  if (data.type === "from") {
    if (data.selectsLangFrom.length === 1) {
      obj = { ...data.dataFreelancers_from.langOne };
    } else if (data.selectsLangFrom.length === 2) {
      obj = { ...data.dataFreelancers_from };
      delete obj.langThree;
    } else if (data.selectsLangFrom.length === 3) {
      obj = { ...data.dataFreelancers_from };
    }
  } else if (data.type === "to") {
    if (data.selectsLangTo.length === 1) {
      obj = { ...data.dataFreelancers_to.langOne };
    } else if (data.selectsLangTo.length === 2) {
      obj = { ...data.dataFreelancers_to };
      delete obj.langThree;
    } else if (data.selectsLangTo.length === 3) {
      obj = { ...data.dataFreelancers_to };
    }
  }
  return obj;
};
