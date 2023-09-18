import profi from "../assets/images/aboutPage/profi.png";
import teams from "../assets/images/aboutPage/teams.png";
import world from "../assets/images/aboutPage/world.png";
export const dataOffers = [
  {
    id: 1,
    miniText: "1our_offer_subtitle",
    title: "1our_offer_title",
    img: "data:image/png;base64,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",
    bool: false,
  },
  {
    id: 2,
    miniText: "2our_offer_subtitle",
    title: "2our_offer_title",
    img: "data:image/png;base64,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",
    bool: false,
  },
  {
    id: 3,
    miniText: "3our_offer_subtitle",
    title: "3our_offer_title",
    img: "data:image/png;base64,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",
    bool: false,
  },
];

export const AdvantagesData = [
  {
    id: 1,
    title: "1Advantages_title",
    text: "1Advantages_subtitle",
  },
  {
    id: 2,
    title: "2Advantages_title",
    text: "2Advantages_subtitle",
  },
  {
    id: 3,
    title: "3Advantages_title",
    text: "3Advantages_subtitle",
  },
  {
    id: 4,
    title: "4Advantages_title",
    text: "4Advantages_subtitle",
  },
];

export const aboutUsData = [
  {
    id: 1,
    title: "1About_text_title",
    text: "1About_text_subtitle",
    img: world,
  },
  {
    id: 2,
    title: "2About_text_title",
    text: "2About_text_subtitle",
    img: profi,
  },
  {
    id: 3,
    title: "3About_text_title",
    text: "3About_text_subtitle",
    img: teams,
  },
];
export const typeData = [
  {
    doc: "typeDoc_Documents",
    id: 1,
  },
  {
    doc: "typeDoc_Video",
    id: 2,
  },
  {
    doc: "typeDoc_Audio",
    id: 3,
  },
  {
    doc: "typeDoc_link",
    id: 4,
  },
];

export const textGoodSendData =
  "We have received your order! The translator will contact you within 24 hours for a detailed discussion about your message!";

export const textGoodFreelance =
  "You have successfully submitted an application to join our team. Recruiter will answer you within 24 hours.!";

export const cookiedata = [
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

export const privacyPageData = [
  {
    id: 1,
    title: "What is this Privacy Policy for?",
    text: "This privacy policy is for this website purefluent.com and governs the privacy of its users who choose to use it. The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore, the way this website processes, stores and protects user data and information will also be detailed within this policy.",
  },
  {
    id: 2,
    title: "The Website",
    text: "This website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website complies to all UK national laws and requirements for user privacy.",
  },
  {
    id: 3,
    title: "Use of Cookies",
    text: "This website uses cookies to better the users experience while visiting the website. Where applicable this website uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for websites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user’s computer / device. Cookies are small files saved to the user’s computers hard drive that track, save and store information about the user’s interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website. Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors. This website uses tracking software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information. You can read Google’s privacy policy here for further information [ http://www.google.com/privacy.html ]. Other cookies may be stored to your computers hard drive by external vendors when this website uses referral programs, sponsored links or adverts. Such cookies are used for conversion and referral tracking and typically expire after 30 days, though some may take longer. No personal information is stored, saved or collected.",
  },
  {
    id: 4,
    title: "Contact & Communication",
    text: "Users contacting this website and/or its owners do so at their own discretion and provide any such personal details requested at their own risk. Your personal information is kept private and stored securely until a time it is no longer required or has no use, as detailed in the Data Protection Act 1998. Every effort has been made to ensure a safe and secure form to email submission process but advise users using such form to email processes that they do so at their own risk. This website and its owners use any information submitted to provide you with further information about the products / services they offer or to assist you in answering any questions or queries you may have submitted. This includes using your details to subscribe you to any email newsletter program the website operates but only if this was made clear to you and your express permission was granted when submitting any form to email process. Or whereby you the consumer have previously purchased from or enquired about purchasing from the company a product or service that the email newsletter relates to. This is by no means an entire list of your user rights in regard to receiving email marketing material. Your details are not passed on to any third parties.",
  },
  {
    id: 5,
    title: "Email Newsletter",
    text: "This website operates an email newsletter program, used to inform subscribers about products and services supplied by this website. Users can subscribe through an online automated process should they wish to do so but do so at their own discretion. Some subscriptions may be manually processed through prior written agreement with the user. Subscriptions are taken in compliance with UK Spam Laws detailed in the Privacy and Electronic Communications Regulations 2003. All personal details relating to subscriptions are held securely and in accordance with the Data Protection Act 1998. No personal details are passed on to third parties nor shared with companies / people outside of the company that operates this website. Under the Data Protection Act 1998 you may request a copy of personal information held about you by this website’s email newsletter program. A small fee will be payable. If you would like a copy of the information held on you please write to the business address at the bottom of this policy. Email marketing campaigns published by this website or its owners may contain tracking facilities within the actual email. Subscriber activity is tracked and stored in a database for future analysis and evaluation. Such tracked activity may include; the opening of emails, forwarding of emails, the clicking of links within the email content, times, dates and frequency of activity [this is by no far a comprehensive list].This information is used to refine future email campaigns and supply the user with more relevant content based around their activity. In compliance with UK Spam Laws and the Privacy and Electronic Communications Regulations 2003 subscribers are given the opportunity to un-subscribe at any time through an automated system. This process is detailed at the footer of each email campaign. If an automated un-subscription system is unavailable clear instructions on how to un-subscribe will by detailed instead.",
  },
  {
    id: 6,
    title: "Contact & Communication",
    text: "Users contacting this website and/or its owners do so at their own discretion and provide any such personal details requested at their own risk. Your personal information is kept private and stored securely until a time it is no longer required or has no use, as detailed in the Data Protection Act 1998. Every effort has been made to ensure a safe and secure form to email submission process but advise users using such form to email processes that they do so at their own risk. This website and its owners use any information submitted to provide you with further information about the products / services they offer or to assist you in answering any questions or queries you may have submitted. This includes using your details to subscribe you to any email newsletter program the website operates but only if this was made clear to you and your express permission was granted when submitting any form to email process. Or whereby you the consumer have previously purchased from or enquired about purchasing from the company a product or service that the email newsletter relates to. This is by no means an entire list of your user rights in regard to receiving email marketing material. Your details are not passed on to any third parties.",
  },
  {
    id: 7,
    title: "External Links",
    text: "Although this website only looks to include quality, safe and relevant external links, users are advised adopt a policy of caution before clicking any external web links mentioned throughout this website. (External links are clickable text / banner / image links to other websites.) The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.",
  },
  {
    id: 8,
    title: "Adverts and Sponsored Links",
    text: "Communication, engagement and actions taken through external social media platforms that this website and its owners participate on are custom to the terms and conditions as well as the privacy policies held with each social media platform respectively. Users are advised to use social media platforms wisely and communicate / engage upon them with due care and caution in regard to their own privacy and personal details. This website nor its owners will ever ask for personal or sensitive information through social media platforms and encourage users wishing to discuss sensitive details to contact them through primary communication channels such as by telephone or email. This website may use social sharing buttons which help share web content directly from web pages to the social media platform in question. Users are advised before using such social sharing buttons that they do so at their own discretion and note that the social media platform may track and save your request to share a web page respectively through your social media platform account.",
  },
  {
    id: 9,
    title: "Shortened Links in Social Media",
    text: "This website and its owners through their social media platform accounts may share web links to relevant web pages. By default some social media platforms shorten lengthy urls [web addresses] (this is an example: http://bit.ly/1S5wipc). Users are advised to take caution and good judgement before clicking any shortened urls published on social media platforms by this website and its owners. Despite the best efforts to ensure only genuine urls are published many social media platforms are prone to spam and hacking and therefore this website and its owners cannot be held liable for any damages or implications caused by visiting any shortened links.",
  },
];

export const goodSendConsult =
  " We got Your question. Please, expect a response within 24 hours. Theanswer will be sent to you by email!";
