import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.css";
import imgNotFound from "../../assets/images/not_found/not_found.png";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className="container">
        <img src={imgNotFound} alt="notFound" />
        <h2>Oops! the page not found.</h2>
        <p>Or simply leverage the expertise of our consultation team.</p>
        <NavLink className="standartBtn" to={"/"}>
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
