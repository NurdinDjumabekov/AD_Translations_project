import React, { useEffect } from "react";
import styles from "./CookiePage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";
import { cookiedata } from "../../localData/data";

const CookiePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.cookPage}>
      <div className="container">
        <div className="addBlockNav">
          <NavLink to={"/"} className="prevPage">
            Main
          </NavLink>
          <img className="arrowPage" src={arrow} alt="" />
          <NavLink className="nextPage">Cookie</NavLink>
        </div>
        <h2>Cookie</h2>
        {cookiedata?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookiePage;
