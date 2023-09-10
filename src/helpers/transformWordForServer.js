export const transformWordForServer = (data) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const date = `${year}-${month}-${day}`;

  const formData = new FormData();
  formData.append("documents", data?.doc);
  formData.append("industries", data?.idEverySelect.industries);
  formData.append("services", 3);
  formData.append("type_file", data.typeDoc);
  formData.append("source_language", data?.idEverySelect.fromLang);
  formData.append("target_language", data?.idEverySelect.toLang);
  formData.append(
    "deadline",
    data.orderData.date === "auto" ? date : data.orderData.date
  );
  formData.append("phone_number", data.orderData.phoneNum);
  formData.append("email", data.orderData.email);
  return formData;
};
