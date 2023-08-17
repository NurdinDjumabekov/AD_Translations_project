import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div>
            <h1>AD Translations</h1>
            <p>
              Delivering accurate translations for all your needs. You can order
              a translation of your document into any of more than 25 languages
              ​​by professional translators at the AD Translates foreign
              language translation agency.
            </p>
            <button onClick={() => navigate("/order")}>Translate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
