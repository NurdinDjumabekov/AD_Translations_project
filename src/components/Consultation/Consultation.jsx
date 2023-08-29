import React, { useState } from "react";
import styles from "./Consultation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDataCansultation } from "../../store/reducers/stateSendDataSlice";
import imgGood from "../../assets/images/orderPage/good.png";

const Consultation = () => {
  const dispatch = useDispatch();
  const { stateConsultation } = useSelector(
    (state) => state.stateSendDataSlice
  );
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sendData = () => {
    dispatch(toTakeDataCansultation(data));
  };
  return (
    <>
      {stateConsultation ? (
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
              />
            </label>
          </form>
          <button type="submit">Send Message</button>
        </div>
      ) : (
        <div className={styles.goodSend}>
          <img src={imgGood} alt="good" />
          <h5>Thank You!</h5>
          <p>
            We got Your question. Please, expect a response within 24 hours. The
            answer will be sent to you by email!
          </p>
        </div>
      )}
    </>
  );
};

export default Consultation;
