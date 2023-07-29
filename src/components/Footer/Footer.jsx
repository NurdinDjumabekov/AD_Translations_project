import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
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
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Services</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <h6>The Small Print</h6>
            </li>
            <li>
              <NavLink>Cookie</NavLink>
            </li>
            <li>
              <NavLink>Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink>Privacy Policy</NavLink>
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
              <NavLink>E: email@gmail.com</NavLink>
            </li>
            <li>
              <NavLink>Bishkek, Kyrgyzstan</NavLink>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
