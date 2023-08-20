import React from "react";
import styles from "./PersonalData.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeDataFreelance } from "../../../store/reducers/freelanceSlice";

const PersonalData = () => {
  const dispatch = useDispatch();
  const { dataFreelance } = useSelector((state) => state.freelanceSlice);
  const { errorFreelanceSend } = useSelector(
    (state) => state.stateSendDataSlice
  );
  return (
    <div className={styles.personalData}>
      <span>Full name</span>
      <input
        type="text"
        className={errorFreelanceSend.name ? styles.errInput : ""}
        placeholder="Enter your full name"
        onChange={(e) =>
          dispatch(
            changeDataFreelance({
              ...dataFreelance,
              name: e.target.value,
            })
          )
        }
      />
      <div>
        <div>
          <span>Email</span>
          <input
            type="text"
            placeholder="Enter your email"
            className={errorFreelanceSend.email ? styles.errInput : ""}
            onChange={(e) =>
              dispatch(
                changeDataFreelance({
                  ...dataFreelance,
                  email: e.target.value,
                })
              )
            }
          />
        </div>
        <div>
          <span>Phone number (with country code)</span>
          <input
            type="text"
            placeholder="+996 (000) 000 - 000"
            className={errorFreelanceSend.phoneNum ? styles.errInput : ""}
            onChange={(e) =>
              dispatch(
                changeDataFreelance({
                  ...dataFreelance,
                  phone: e.target.value,
                })
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
