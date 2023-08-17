import React, { useEffect, useState } from "react";
import styles from "./QuestionFAQ.module.css";
import arrow from "../../../assets/images/aboutPage/arrow.svg";
import { useNavigate } from "react-router-dom";

const QuestionFAQ = () => {
  const [arr, setArr] = useState([
    {
      id: 1,
      question: "What services do you offer as a translation company?",
      answer:
        "Our translation company provides a wide range of language services, including professional translation, localization, proofreading, and interpretation for various industries and documents.",
      bool: false,
    },
    {
      id: 2,
      question: "What languages do you support?",
      answer:
        "We have a network of skilled linguists proficient in a vast array of languages, covering popular languages like English, Spanish, French, Chinese, and many more.",
      bool: false,
    },
    {
      id: 3,
      question: "How do you ensure translation quality?",
      answer:
        "We maintain a rigorous quality assurance process, which includes multiple rounds of proofreading, editing, and reviewing by native-speaking translators with subject matter expertise.",
      bool: false,
    },
    {
      id: 4,
      question: "How do you handle sensitive or confidential information?",
      answer:
        "We prioritize data security and confidentiality. Our translators adhere to strict non-disclosure agreements (NDAs), and we employ secure file transfer protocols.",
      bool: false,
    },
    {
      id: 5,
      question: "What is the turnaround time for translation projects?",
      answer:
        "The turnaround time can vary depending on the project's complexity, language pair, and document length. We work closely with clients to establish reasonable deadlines and ensure timely delivery.",
      bool: false,
    },
    {
      id: 6,
      question: "What are your accepted payment methods?",
      answer:
        "We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms, making it convenient for clients to process payments.",
      bool: false,
    },
  ]);

  const navigate = useNavigate();

  const lookAnswer = (id, bool) => {
    const newArr = arr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          bool: !item.bool,
        };
      }
      return item;
    });
    setArr(newArr);
  };
  //   console.log(arr);

  return (
    <div className={styles.question}>
      <div className="container">
        <h4 className="standartTitle">FAQ</h4>
        <div className={styles.question__inner}>
          {arr.map((item) => (
            <div key={item.id} onClick={() => lookAnswer(item.id, item.bool)}>
              <div>
                <p>{item.question}</p>
                <button className={item.bool ? styles.activeBtn : ""}>
                  <img src={arrow} alt="^" />
                </button>
              </div>
              {item.bool && <span>{item.answer}</span>}
            </div>
          ))}
        </div>
        <button className="standartBtn" onClick={() => navigate("/order")}>
          Start Translation
        </button>
      </div>
    </div>
  );
};

export default QuestionFAQ;
