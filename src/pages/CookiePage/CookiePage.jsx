import React, { useEffect } from "react";
import styles from "./CookiePage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";

const CookiePage = () => {
  const data = [
    {
      id: 1,
      title: "What Are Cookies",
      text: "As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.",
    },
    {
      id: 2,
      title: "How We Use Cookies",
      text: "We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.",
    },
    {
      id: 3,
      title: "Disabling Cookies",
      text: "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.",
    },
    {
      id: 4,
      title: "The Cookies We Set",
      text: "Site preferences cookies In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.",
    },
    {
      id: 5,
      title: "Third Party Cookies",
      text: "In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site. This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page. From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most. As we sell products it’s important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price. The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you. For more information on Google AdSense see the official Google AdSense privacy FAQ.We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; {Twitter, Facebook}, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.",
    },
    {
      id: 6,
      title: "More Information",
      text: "Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.",
    },
  ];

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
        {data?.map((item) => (
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
