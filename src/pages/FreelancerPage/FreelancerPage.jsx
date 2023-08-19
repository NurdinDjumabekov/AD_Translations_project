import React, { useEffect } from "react";
import PersonalData from "../../components/FreelancerPage/PersonalData/PersonalData";
import styles from "./FreelancerPage.module.css";
import FreelancerLang from "../../components/FreelancerPage/FreelancerLang/FreelancerLang";
import { useDispatch, useSelector } from "react-redux";
import { toTakeLanguage } from "../../store/reducers/dataSelectSlice";
import Preloader from "../../components/Preloader/Preloader";
import { sendDataFreelancers } from "../../store/reducers/freelanceSlice";

const FreelancerPage = () => {
  const dispatch = useDispatch();
  const { typeLanguage } = useSelector((state) => state.dataSelectSlice);
  const { preloader } = useSelector((state) => state.mainPageSlice);
  const { dataFreelancers_from, dataFreelancers_to } = useSelector(
    (state) => state.freelanceSlice
  );

  useEffect(() => {
    dispatch(toTakeLanguage());
    // dispatch(sendDataFreelancers());
  }, []);

  console.log(dataFreelancers_from);
  // console.log(dataFreelancers_to);

  return (
    <>
      <div className={styles.freelancer}>
        <div className="container">
          {preloader ? (
            <Preloader />
          ) : (
            <>
              <h2>Welcome freelancer!</h2>
              <p>
                Do You want to join our team? Fill in the fields below and we
                will contact You!
              </p>
              <PersonalData />
            </>
          )}
          <FreelancerLang typeLanguage={typeLanguage} />
          <button className={styles.sendData}>Become a Member!</button>
        </div>
      </div>
    </>
  );
};

export default FreelancerPage;
