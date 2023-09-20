import React, { useEffect, useState } from "react";
import styles from "./ConsultationPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import imgGood from "../../assets/images/orderPage/good.png";
import { sendConsultationData } from "../../store/reducers/onServerSlice";
import Preloader from "../../components/Preloader/Preloader";
import { useNavigate } from "react-router-dom";

const ConsultationPage = () => {
  const regEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { goodSendConsultation } = useSelector(
    (state) => state.stateSendDataSlice
  );
  const { preloader } = useSelector((state) => state.mainPageSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sendError, setSendError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendData = (e) => {
    e.preventDefault();
    if (data.name !== "") {
      if (regEmail.test(data.email)) {
        if (data.message !== "") {
          dispatch(sendConsultationData(data));
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setSendError({ ...sendError, message: true });
          setTimeout(() => {
            setSendError({ ...sendError, message: false });
          }, 1500);
        }
      } else {
        setSendError({ ...sendError, email: true });
        setTimeout(() => {
          setSendError({ ...sendError, email: false });
        }, 1500);
      }
    } else {
      setSendError({ ...sendError, name: true });
      setTimeout(() => {
        setSendError({ ...sendError, name: false });
      }, 1500);
    }
  };

  return (
    <>
      {goodSendConsultation ? (
        <div className={styles.goodSend}>
          <img src={imgGood} alt="good" />
          <h5>{t("Thank You!")}</h5>
          <p>{t("goodSendConsult")}</p>
        </div>
      ) : (
        <div className={styles.consultation}>
          <h4>Get a Free Consultation</h4>
          <p>Have a question? Reach out to us.</p>
          <form action="" onSubmit={sendData}>
            <label>
              <label className={styles.aboveText}>Name</label>
              <input
                onChange={(e) =>
                  setData((i) => ({ ...i, name: e.target.value }))
                }
                type="text"
                placeholder="Enter your name"
                className={sendError.name ? styles.sendError : ""}
              />
            </label>
            <label>
              <label className={styles.aboveText}>Email</label>
              <input
                onChange={(e) =>
                  setData((i) => ({ ...i, email: e.target.value }))
                }
                type="email"
                placeholder="Enter your email"
                className={sendError.email ? styles.sendError : ""}
              />
            </label>
            <label>
              <label className={styles.aboveText}>Message</label>
              <input
                onChange={(e) =>
                  setData((i) => ({ ...i, message: e.target.value }))
                }
                type="text"
                placeholder="Enter your message here"
                className={sendError.message ? styles.sendError : ""}
              />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      )}
      {preloader && <Preloader />}
    </>
  );
};

export default ConsultationPage;
