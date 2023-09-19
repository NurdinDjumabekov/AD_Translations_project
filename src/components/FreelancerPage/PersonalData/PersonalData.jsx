import React from "react";
import styles from "./PersonalData.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeDataFreelance } from "../../../store/reducers/freelanceSlice";
import { useTranslation } from "react-i18next";

const PersonalData = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { dataFreelance } = useSelector((state) => state.freelanceSlice);
  const { errorFreelanceSend } = useSelector(
    (state) => state.stateSendDataSlice
  );
  return (
    <div className={styles.personalData}>
      <span>{t("Full name")}</span>
      <input
        type="text"
        className={errorFreelanceSend.name ? styles.errInput : ""}
        placeholder={t("Enter your full name")}
        onChange={(e) =>
          dispatch(
            changeDataFreelance({
              ...dataFreelance,
              name: e.target.value,
            })
          )
        }
        value={dataFreelance.name}
      />
      <div>
        <div>
          <span>{t("Email")}</span>
          <input
            type="text"
            placeholder={t("Enter your email")}
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
          <span>{t("Phone number (with country code)")}</span>
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
