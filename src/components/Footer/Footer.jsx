import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/images/footer/facebook.svg";
import insta from "../../assets/images/footer/instagramm.svg";
import inn from "../../assets/images/footer/in.svg";
import twitter from "../../assets/images/footer/twitter.svg";
import youtube from "../../assets/images/footer/youtube.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__inner}>
          <NavLink to={"/"}>
            <div>
              <img src="/src/assets/images/logo.svg" alt="logo" />
            </div>
            <p>AD Translations</p>
          </NavLink>
          <ul className={styles.first_ul}>
            <li>
              <h6>{t("Pages")}</h6>
            </li>
            <li>
              <NavLink to={"/"}>{t("Home")}</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>{t("Services")}</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>{t("About")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h6>{t("Security")}</h6>
            </li>
            <li>
              <NavLink to={"/cookie"}>{t("Cookie")}</NavLink>
            </li>
            <li>
              <NavLink to={"/conditions"}>{t("Terms and Conditions")}</NavLink>
            </li>
            <li>
              <NavLink to={"/privacy"}>{t("Privacy Policy")}</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h6>{t("Contact")}</h6>
            </li>
            <li>
              <NavLink>T: +996(995)333-037</NavLink>
            </li>
            {/* <li>
              <NavLink>+996(508)107-888</NavLink>
            </li> */}
            <li>
              <NavLink>E: adTranslations01@gmail.com</NavLink>
            </li>
            <li>
              <NavLink>{t("Bishkek, Kyrgyzstan")}</NavLink>
            </li>
            <li>
              <NavLink to={"/freelancer"}>{t("Become our member")}</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.footer__icons}>
          <img src={inn} alt="in" />
          <img src={insta} alt="insta" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
