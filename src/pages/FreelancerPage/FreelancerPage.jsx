import React from "react";
import PersonalData from "../../components/FreelancerPage/PersonalData/PersonalData";
import styles from "./FreelancerPage.module.css";
import FreelancerLang from "../../components/FreelancerPage/FreelancerLang/FreelancerLang";

const FreelancerPage = () => {
  return (
    <div className={styles.freelancer}>
      <div className="container">
        <h2>Welcome freelancer!</h2>
        <p>
          Do You want to join our team? Fill in the fields below and we will
          contact You!
        </p>
        <PersonalData />
        <FreelancerLang />
      </div>
    </div>
  );
};

export default FreelancerPage;
