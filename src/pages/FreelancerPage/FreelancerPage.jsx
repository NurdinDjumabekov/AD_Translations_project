import React, { useEffect } from "react";
import PersonalData from "../../components/FreelancerPage/PersonalData/PersonalData";
import styles from "./FreelancerPage.module.css";
import FreelancerLang from "../../components/FreelancerPage/FreelancerLang/FreelancerLang";
import { useDispatch, useSelector } from "react-redux";
import { sendDataFreelancers } from "../../store/reducers/freelanceSlice";
import { changeErrorFreelanceSend } from "../../store/reducers/stateSendDataSlice";
import { checkFullName } from "../../helpers/freelaceValidation";
import GoodSendData from "../../components/GoodSendData/GoodSendData";
import { useTranslation } from "react-i18next";

const FreelancerPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const { selectsLangFrom, selectsLangTo, errorFreelanceSend } = useSelector(
    (state) => state.stateSendDataSlice
  );
  const { dataFreelancers_from, dataFreelancers_to, dataFreelance } =
    useSelector((state) => state.freelanceSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendData = () => {
    checkFullName(
      dispatch,
      dataFreelance,
      sendDataFreelancers, // функции
      changeErrorFreelanceSend, //
      errorFreelanceSend, //
      dataFreelancers_from,
      dataFreelancers_to,
      selectsLangFrom,
      selectsLangTo
    );
  };

  return (
    <>
      {goodSendData ? (
        <div className={styles.freelancer}>
          <div className="container">
            <>
              <h2>{t("freelancer_title")}</h2>
              <p>{t("freelancer_subtitle")}</p>
              <PersonalData />
            </>
            <FreelancerLang />
            <button className={styles.sendData} onClick={sendData}>
              {t("freelancer_btn")}
            </button>
          </div>
        </div>
      ) : (
        <GoodSendData text={t("textGoodFreelance")} />
      )}
    </>
  );
};
export default FreelancerPage;
