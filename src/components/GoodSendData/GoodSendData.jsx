import React from "react";
import styles from "./GoodSendData.module.css";
import good from "../../assets/images/orderPage/good.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeGoodSendData } from "../../store/reducers/orderPageSlice";

const GoodSendData = () => {
  const dispatch = useDispatch();
  const closeBlock = () => {
    dispatch(changeGoodSendData(true));
  };
  return (
    <div className={styles.goodSend}>
      <div>
        <div>
          <img src={good} alt="done!" />
        </div>
        <h2>Great!</h2>
        <p>
          We have received your order! The translator will contact you within 24
          hours for a detailed discussion about your message!
        </p>
        <NavLink onClick={closeBlock} className="standartBtn" to={"/"}>
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default GoodSendData;
