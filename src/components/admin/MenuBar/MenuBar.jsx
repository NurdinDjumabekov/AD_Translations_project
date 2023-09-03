import React from "react";
import styles from "./MenuBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import pagesImg from "../../../assets/images/admin/pages.svg";
import users from "../../../assets/images/admin/users.svg";
import contacts from "../../../assets/images/admin/contacts.svg";

const MenuBar = () => {
  const pages = [
    {
      id: 1,
      page: "Pages",
      link: "",
      img: pagesImg,
    },
    {
      id: 2,
      page: "Home",
      link: "/adminHome",
    },
    {
      id: 3,
      page: "Services",
      link: "/adminServices",
    },
    {
      id: 4,
      page: "About",
      link: "/adminAbout",
    },
    {
      id: 5,
      page: "Received from Users",
      link: "",
      img: users,
    },
    {
      id: 6,
      page: "Orders",
      link: "/adminOrders",
    },
    {
      id: 7,
      page: "Questions",
      link: "/adminQuestions",
    },
    {
      id: 8,
      page: "Freelance",
      link: "/adminFreelance",
    },
    {
      id: 9,
      page: "Contacts",
      link: "",
      img: contacts,
    },
  ];
  return (
    <div className={styles.menuBar}>
      <div className={styles.adminMenu}>
        <h2>AD Translations</h2>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul className={styles.adminPanel}>
        <li>
          <h3>Admin Panel</h3>
        </li>
        {pages.map((item) => (
          <li>
            {item.img ? (
              <div className={styles.pageMenu}>
                <img src={item?.img} alt="page" />
                <h4>{item.page}</h4>
              </div>
            ) : (
              <NavLink to={item.link}>{item.page}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
