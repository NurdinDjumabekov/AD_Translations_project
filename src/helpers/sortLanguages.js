export const sortLanguages = (allLang) => {
  // console.log(allLang, "55625;");
  const sortedLang = [...allLang]?.sort((a, b) => a.name.localeCompare(b.name)); // сортирую по алфавиту

  const upperCaseLetter = sortedLang?.map((i) => ({
    ...i,
    name: i.name[0]?.toLocaleUpperCase() + i.name?.slice(1).toLocaleLowerCase(),
  }));
  /// первые буквы все буду заглавными

  const arrLetter = [];
  const newArr = upperCaseLetter?.map((i) => {
    if (arrLetter?.includes(i.name[0])) {
      return {
        ...i,
        name: i.name[0] + i.name.slice(1),
        letter: "",
      };
    } else {
      arrLetter?.push(i.name[0]);
      return {
        ...i,
        name: i.name[0] + i.name.slice(1),
        letter: i.name[0],
      };
    }
  });
  // добавляю буквы в отдельные ключи, в объекте
  const newAllArr = [];
  const length = newArr?.length / 3;
  const arr1 = [...newArr?.slice(0, Math.floor(length))];
  const arr2 = [
    ...newArr?.slice(Math.floor(length), newArr?.length - Math.floor(length)),
  ];
  const arr3 = [...newArr?.slice(-Math.floor(length))];
  newAllArr?.push(arr1);
  newAllArr?.push(arr2);
  newAllArr?.push(arr3);
  const data = [newAllArr, newArr]; // первый массив для decktop , а второй для mobile
  // console.log(data, "55625;");

  return data;
};
