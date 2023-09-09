import React, { useEffect } from "react";
import PersonalData from "../../components/FreelancerPage/PersonalData/PersonalData";
import styles from "./FreelancerPage.module.css";
import FreelancerLang from "../../components/FreelancerPage/FreelancerLang/FreelancerLang";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import { sendDataFreelancers } from "../../store/reducers/freelanceSlice";
import { changeErrorFreelanceSend } from "../../store/reducers/stateSendDataSlice";
import { checkFullName } from "../../helpers/freelaceValidation";
import GoodSendData from "../../components/GoodSendData/GoodSendData";
import { updateForSelects } from "../../helpers/updateForSelects";
import { textGoodFreelance } from "../../localData/data";

const FreelancerPage = () => {
  const dispatch = useDispatch();
  const { goodSendData } = useSelector((state) => state.orderPageSlice);
  const { preloader } = useSelector((state) => state.mainPageSlice);
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
      sendDataFreelancers,
      changeErrorFreelanceSend,
      errorFreelanceSend,
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
              <h2>Welcome freelancer!</h2>
              <p>
                Do You want to join our team? Fill in the fields below and we
                will contact You!
              </p>
              <PersonalData />
            </>
            <FreelancerLang />
            <button className={styles.sendData} onClick={sendData}>
              Become a Member!
            </button>
          </div>
        </div>
      ) : (
        <GoodSendData text={textGoodFreelance} />
      )}
      {preloader && <Preloader />}
    </>
  );
};
export default FreelancerPage;
