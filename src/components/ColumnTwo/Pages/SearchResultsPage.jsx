import React from "react";
import { Outlet } from "react-router-dom";
import PageEndLine from "../ColumnTwo/PageEndLine";


import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};

export default SearchResultsPage;
