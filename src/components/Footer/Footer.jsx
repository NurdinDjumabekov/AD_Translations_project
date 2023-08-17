import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/images/footer/facebook.svg";
import insta from "../../assets/images/footer/instagramm.svg";
import inn from "../../assets/images/footer/in.svg";
import twitter from "../../assets/images/footer/twitter.svg";
import youtube from "../../assets/images/footer/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__inner}>
          <NavLink to={"/"}>
            <div>
              <img src="/src/assets/images/logo.svg" alt="" />
            </div>
            <p>AD Translations</p>
          </NavLink>
          <ul>
            <li>
              <h6>Pages</h6>
            </li>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h6>Security</h6>
            </li>
            <li>
              <NavLink to={"/cookie"}>Cookie</NavLink>
            </li>
            <li>
              <NavLink to={"/conditions"}>Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink to={"/privacy"}>Privacy Policy</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h6>Contact</h6>
            </li>
            <li>
              <NavLink>T: +996(508)107-888</NavLink>
            </li>
            <li>
              <NavLink>+996(508)107-888</NavLink>
            </li>
            <li>
              <NavLink>E: email@gmail.com</NavLink>
            </li>
            <li>
              <NavLink>Bishkek, Kyrgyzstan</NavLink>
            </li>
            <li>
              <NavLink>Become our member</NavLink>
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
