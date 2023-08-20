import React, { useEffect, useState } from "react";
import PersonalData from "../../components/FreelancerPage/PersonalData/PersonalData";
import styles from "./FreelancerPage.module.css";
import FreelancerLang from "../../components/FreelancerPage/FreelancerLang/FreelancerLang";
import { useDispatch, useSelector } from "react-redux";
import { toTakeLanguage } from "../../store/reducers/dataSelectSlice";
import Preloader from "../../components/Preloader/Preloader";
import { sendDataFreelancers } from "../../store/reducers/freelanceSlice";
import { changeErrorFreelanceSend } from "../../store/reducers/stateSendDataSlice";
import { checkFullName } from "../../helpers/freelaceValidation";
import GoodSendData from "../../components/GoodSendData/GoodSendData";

const FreelancerPage = () => {
  const dispatch = useDispatch();
  const { typeLanguage } = useSelector((state) => state.dataSelectSlice);
  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const text =
    "You have successfully submitted an application to join our team. Recruiter will answer you within 24 hours.";
  const { preloader } = useSelector((state) => state.mainPageSlice);
  const { allSelects, errorFreelanceSend } = useSelector(
    (state) => state.stateSendDataSlice
  );
  const { dataFreelancers_from, dataFreelancers_to, dataFreelance } =
    useSelector((state) => state.freelanceSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeLanguage());
  }, []);
  const sendData = () => {
    checkFullName(
      dispatch,
      dataFreelance,
      sendDataFreelancers,
      changeErrorFreelanceSend,
      errorFreelanceSend,
      dataFreelancers_from,
      dataFreelancers_to,
      allSelects
    );
  };

  // console.log(dataFreelancers_from);
  // console.log(dataFreelancers_to);

  return (
    <>
      {goodSendData ? (
        <div className={styles.freelancer}>
          <div className="container">
            <>
              <h2>Welcome freelancer!</h2>
              <p>
                Do You want to join our team? Fill in the fields below and we
                will contact You!
              </p>
              <PersonalData />
            </>

            <FreelancerLang typeLanguage={typeLanguage} />
            <button className={styles.sendData} onClick={sendData}>
              Become a Member!
            </button>
          </div>
        </div>
      ) : (
        <GoodSendData text={text} />
      )}
      {preloader && <Preloader />}
    </>
  );
};

export default FreelancerPage;
