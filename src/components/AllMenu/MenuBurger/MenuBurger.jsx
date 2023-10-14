import React, { useEffect, useState } from "react";
import styles from "./MenuBurger.module.css";
import iconImg from "../../../assets/images/menu/iconMenu.svg";
import krest from "../../../assets/images/menu/x.svg";
import logo from "../../../assets/images/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import TranslateLang from "../TranslateLang/TranslateLang";

const MenuBurger = () => {
  const [lookMenu, setLookMenu] = useState(false);
  const [mainTitlePage, setMainTitlePage] = useState("AD Translations");
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { langData } = useSelector((state) => state.onServerSlice);
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
    // {
    //   id: 6,
    //   title: "Cookie",
    //   link: "/cookie",
    //   bool: false,
    // },
    // {
    //   id: 7,
    //   title: "Conditions",
    //   link: "/conditions",
    //   bool: false,
    // },
    // {
    //   id: 8,
    //   title: "Privacy",
    //   link: "/Privacy",
    //   bool: false,
    // },
    // {
    //   id: 9,
    //   title: "Consultation",
    //   link: "/consultation",
    //   bool: false,
    // },
  ]);
  console.log(langData, "langData");

  const goOtherPage = (link) => {
    navigate(link);
    setLookMenu(false);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setMainTitlePage("AD Translations");
    } else if (location.pathname === "/services") {
      setMainTitlePage("Services");
    } else if (location.pathname === "/about") {
      setMainTitlePage("About");
    } else if (location.pathname === "/order") {
      setMainTitlePage("Translate");
    } else if (location.pathname === "/freelancer") {
      setMainTitlePage("Treelancer");
    } else if (location.pathname === "/cookie") {
      setMainTitlePage("Cookie");
    } else if (location.pathname === "/conditions") {
      setMainTitlePage("Terms and Conditions");
    } else if (location.pathname === "/privacy") {
      setMainTitlePage("Privacy Policy");
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
              onClick={() => setLookMenu(false)}
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
                <li onClick={() => setLookMenu(false)}>
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
