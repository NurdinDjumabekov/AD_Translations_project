import React, { useEffect, useState } from "react";
import styles from "./MenuBurger.module.css";
import iconImg from "../../../assets/images/menu/iconMenu.svg";
import krest from "../../../assets/images/menu/x.svg";
import logo from "../../../assets/images/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TranslateLang from "../TranslateLang/TranslateLang";

const MenuBurger = () => {
  const [lookMenu, setLookMenu] = useState(false);
  const [mainTitlePage, setMainTitlePage] = useState("AD Translations");
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [pages, setPages] = useState([
    {
      id: 1,
      title: "Home",
      link: "/",
      bool: false,
    },
    {
      id: 2,
      title: "Services",
      link: "/services",
      bool: false,
    },
    {
      id: 3,
      title: "AboutUs",
      link: "/about",
      bool: false,
    },
    {
      id: 4,
      title: "Translate",
      link: "/order",
      bool: false,
    },
    {
      id: 5,
      title: "Freelancer",
      link: "/freelancer",
      bool: false,
    },
  ]);

  const goOtherPage = (link) => {
    navigate(link);
    setLookMenu(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setMainTitlePage("AD Translations");
    } else if (location.pathname === "/services") {
      setMainTitlePage(t("Services"));
    } else if (location.pathname === "/about") {
      setMainTitlePage(t("About"));
    } else if (location.pathname === "/order") {
      setMainTitlePage(t("Translate"));
    } else if (location.pathname === "/freelancer") {
      setMainTitlePage(t("Freelancer"));
    } else if (location.pathname === "/cookie") {
      setMainTitlePage(t("Cookie"));
    } else if (location.pathname === "/conditions") {
      setMainTitlePage(t("Terms and Conditions"));
    } else if (location.pathname === "/privacy") {
      setMainTitlePage(t("Privacy Policy"));
    } else {
      setMainTitlePage("AD Translations");
    }
  }, [location.pathname]);

  return (
    <>
      <div className={styles.menuBurger}>
        {lookMenu ? (
          <>
            <div
              className={styles.menuBurger__childShadow}
              onClick={() => setLookMenu(false)}
            ></div>
            <div
              className={styles.menuBurger__child}
            >
              <ul>
                {pages?.map((i) => (
                  <li key={i.id} onClick={() => goOtherPage(i.link)}>
                    {t(i.title)}
                  </li>
                ))}
                <li className={styles.closeMenu}>
                  <img onClick={() => setLookMenu(false)} src={krest} alt="x" />
                </li>
                <li className={styles.languages} onClick={() => setLookMenu(true)}>
                  <TranslateLang />
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className={styles.iconImgParent}>
            <div>
              <img src={logo} alt="logo" />
              <p>{mainTitlePage}</p>
            </div>
            <img onClick={() => setLookMenu(true)} src={iconImg} alt="|||" />
          </div>
        )}
      </div>
    </>
  );
};

export default MenuBurger;
