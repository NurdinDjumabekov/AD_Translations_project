export const updateForSelects = (arr, type) => {
  let newArr = [];
  if (type === "Services") {
    return (newArr = arr?.map((i) => {
      return { id: i?.id, choice: i?.title };
    }));
  } else if (type === "Industries") {
    return (newArr = arr?.map((i) => {
      return { id: i?.id, choice: i?.iconText };
    }));
  } else if (type === "allLang") {
    return (newArr = arr?.map((i) => {
      return { id: i?.id, choice: i?.name };
    }));
  }
};
