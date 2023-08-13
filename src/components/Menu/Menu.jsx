import React, { useState } from "react";
import styles from "./Menu.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Menu = () => {
  const location = useLocation();
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
      title: "About",
      link: "/about",
      bool: false,
    },
    {
      id: 4,
      title: "Translate",
      link: "/order",
      bool: false,
    },
  ]);

  useEffect(() => {
    const newPage = pages.map((i) => {
      if (i.link === location.pathname) {
        return {
          ...i,
          bool: true,
        };
      } else {
        return {
          ...i,
          bool: false,
        };
      }
    });
    setPages(newPage);
  }, [location.pathname]);

  return (
    <>
      <div className={styles.blockPush}></div>
      <div className={styles.menu}>
        <div className="container">
          <div className={styles.menu__inner}>
            <div>
              <NavLink to={"/"}>
                <img src="/src/assets/images/logo.svg" alt="logo" />
                <p>AD Translations</p>
              </NavLink>
            </div>
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <NavLink
                    to={page.link}
                    className={page.bool ? styles.activePage : ""}
                  >
                    {page.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to={"/"}>
                  <img src="./src/assets/images/mainPage/teams.svg" alt="" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
