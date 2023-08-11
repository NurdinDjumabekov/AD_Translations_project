import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
      <label className={styles.search}>
        <input type="text" placeholder="Search in site" />
      </label>
    </>
  );
};

export default Search;
