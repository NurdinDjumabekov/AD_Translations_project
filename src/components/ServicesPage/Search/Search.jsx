import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import loop from "../../../assets/images/servicesPage/loop_search.svg";
import cross from "../../../assets/images/servicesPage/krestik.svg";
import { changeSearch } from "../../../store/reducers/servicesPageSlice";
import { useDispatch, useSelector } from "react-redux";

const Search = ({ setCount }) => {
  const { search } = useSelector((state) => state.servicesPageSlice);
  const [lookIcos, setLookIcos] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search === "") {
      setLookIcos(false);
    } else {
      setLookIcos(true);
      setCount(1);
    }
  }, [search]);

  return (
    <>
      <label className={styles.search}>
        <input
          type="text"
          onChange={(e) => dispatch(changeSearch(e.target.value))}
          placeholder="Search in site"
          value={search}
        />
        {lookIcos ? (
          <label
            onClick={() => dispatch(changeSearch(""))}
            className={styles.search__cross}
          >
            <img src={cross} alt="x" />
          </label>
        ) : (
          <label className={styles.search__loop}>
            <img src={loop} alt="0" />
          </label>
        )}
      </label>
    </>
  );
};

export default Search;
