import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  toTakeAllDataServices,
  toTakeDataServices,
} from "../../../store/reducers/servicesPageSlice";
import { addDataID } from "../../../helpers/addDataID";

const Services = () => {
  const dispatch = useDispatch();
  const { dataServices, dataForSearch, search } = useSelector(
    (state) => state.servicesPageSlice
  );

  useEffect(() => {
    dispatch(toTakeAllDataServices());
  }, []);

  useEffect(() => {
    const newData = dataForSearch.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(toTakeDataServices(addDataID(newData)));
  }, [search]);

  const [count, setCount] = useState(1);
  // console.log(count, "count");
  // console.log(dataServices, "dataServices");

  return (
    <div className={styles.services}>
      <h4 className="standartTitle">Services</h4>
      <p>Click and read about our services</p>
      <div className="container">
        <div className={styles.services__inner}>
          <div className={styles.services__allContent}>
            <Search setCount={setCount} />
            {dataServices?.length === 0 ? (
              <p className={styles.empty}>ничего не найдено</p>
            ) : (
              dataServices?.map((card) => (
                <div
                  key={card.id}
                  className={
                    count === card.id ? styles.activeServicesBlock : ""
                  }
                  onClick={() => setCount(card.id)}
                >
                  <div className={styles.services__content}>
                    <h5>{card.title}</h5>
                    <p>{card.text}</p>
                  </div>
                  <img src={card.image} alt="картинка" />
                </div>
              ))
            )}
          </div>
          <div className={styles.services__everyContent}>
            {dataServices?.length === 0 ? (
              <p className={styles.empty__content}>ничего не найдено</p>
            ) : (
              dataServices?.map((item) => {
                if (item.id === count) {
                  return (
                    <div key={item.id}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  );
                }
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
