export const sortLanguages = (
  arr = [
    {
      id: 1,
      title: "Arabic",
      letter: "A",
    },
    {
      id: 2,
      title: "Azerbaijani",
      letter: "",
    },
    {
      id: 3,
      title: "Chinese (Traditional)",
      letter: "C",
    },
    {
      id: 4,
      title: "Czech",
      letter: "",
    },
    {
      id: 5,
      title: "English",
      letter: "E",
    },
    {
      id: 6,
      title: "German",
      letter: "G",
    },
    {
      id: 7,
      title: "Hindi",
      letter: "H",
    },
    {
      id: 8,
      title: "Irish",
      letter: "I",
    },
    {
      id: 9,
      title: "Italian",
      letter: "",
    },
    {
      id: 10,
      title: "Indian",
      letter: "",
    },
    {
      id: 11,
      title: "Kazakh",
      letter: "K",
    },
    {
      id: 12,
      title: "Korean",
      letter: "",
    },
    {
      id: 13,
      title: "Kyrgyz",
      letter: "",
    },
    {
      id: 14,
      title: "Mongolian",
      letter: "M",
    },
    {
      id: 15,
      title: "Japanese",
      letter: "J",
    },
    {
      id: 16,
      title: "Spanish",
      letter: "S",
    },
    {
      id: 17,
      title: "Norwegian",
      letter: "N",
    },
    {
      id: 18,
      title: "Uzbek",
      letter: "U",
    },
    {
      id: 19,
      title: "Urdu",
      letter: "",
    },
    {
      id: 20,
      title: "Russian",
      letter: "R",
    },
    {
      id: 21,
      title: "French",
      letter: "F",
    },
    {
      id: 22,
      title: "Vietnamese",
      letter: "V",
    },
  ]
) => {
  const newAllArr = [];
  const length = arr.length / 3;
  const arr1 = [...arr.slice(0, Math.floor(length))];
  const arr2 = [
    ...arr.slice(Math.floor(length), arr.length - Math.floor(length)),
  ];
  const arr3 = [...arr.slice(-Math.floor(length))];
  newAllArr.push(arr1);
  newAllArr.push(arr2);
  newAllArr.push(arr3);
  return newAllArr;
};
