import React, { useEffect } from "react";
import styles from "./PrivacyPage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";
import { privacyPageData } from "../../localData/data";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.privacyPage}>
      <div className="container">
        <div className="addBlockNav">
          <NavLink to={"/"} className="prevPage">
            Home
          </NavLink>
          <img className="arrowPage" src={arrow} alt="" />
          <NavLink className="nextPage">Privacy Policy</NavLink>
        </div>
        <h2>Privacy Policy</h2>
        {privacyPageData?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPage;
