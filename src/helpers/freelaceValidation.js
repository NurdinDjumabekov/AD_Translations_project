import { arrangementData } from "./arrangementData";
import { checkSendData } from "./checkSendData";

export const checkFullName = (
  dispatch,
  dataFreelance,
  sendDataFreelancers,
  changeErrorFreelanceSend,
  errorFreelanceSend,
  dataFreelancers_from,
  dataFreelancers_to,
  allSelects
) => {
  if (dataFreelance.name !== "") {
    checkEmail(
      dispatch,
      dataFreelance,
      sendDataFreelancers,
      changeErrorFreelanceSend,
      errorFreelanceSend,
      dataFreelancers_from,
      dataFreelancers_to,
      allSelects
    );
    ///////////////////////
  } else {
    dispatch(
      changeErrorFreelanceSend({
        ...errorFreelanceSend,
        name: true,
      })
    );
    setTimeout(() => {
      dispatch(
        changeErrorFreelanceSend({
          ...errorFreelanceSend,
          name: false,
        })
      );
    }, 1500);
  }
};

export const checkEmail = (
  dispatch,
  dataFreelance,
  sendDataFreelancers,
  changeErrorFreelanceSend,
  errorFreelanceSend,
  dataFreelancers_from,
  dataFreelancers_to,
  allSelects
) => {
  const regEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (regEmail.test(dataFreelance.email)) {
    checkNumPhone(
      dispatch,
      dataFreelance,
      sendDataFreelancers,
      changeErrorFreelanceSend,
      errorFreelanceSend,
      dataFreelancers_from,
      dataFreelancers_to,
      allSelects
    );
  } else {
    dispatch(
      changeErrorFreelanceSend({
        ...errorFreelanceSend,
        email: true,
      })
    );
    setTimeout(() => {
      dispatch(
        changeErrorFreelanceSend({
          ...errorFreelanceSend,
          email: false,
        })
      );
    }, 1500);
  }
};

export const checkNumPhone = (
  dispatch,
  dataFreelance,
  sendDataFreelancers,
  changeErrorFreelanceSend,
  errorFreelanceSend,
  dataFreelancers_from,
  dataFreelancers_to,
  allSelects
) => {
  const regNumPhone = /[0-9]{7,15}/;
  if (regNumPhone.test(dataFreelance.phone)) {
    dispatch(
      sendDataFreelancers({
        selects: arrangementData({
          fromLang: checkSendData({
            allSelects,
            dataFreelancers_from,
            type: "from",
          }),
          toLang: checkSendData({
            allSelects,
            dataFreelancers_to,
            type: "to",
          }),
        }),
        data: dataFreelance,
      })
    );
  } else {
    dispatch(
      changeErrorFreelanceSend({
        ...errorFreelanceSend,
        phoneNum: true,
      })
    );
    setTimeout(() => {
      dispatch(
        changeErrorFreelanceSend({
          ...errorFreelanceSend,
          phoneNum: false,
        })
      );
    }, 1500);
  }
};
