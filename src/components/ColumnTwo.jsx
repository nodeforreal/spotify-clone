import React from "react";

import TopNavigationBarBg from "./ColumnTwo/TopNavigationBarBg";
import TopNavigationBar from "./ColumnTwo/TopNavigationBar";
import MainPage from "./ColumnTwo/MainPage";

import styles from "./ColumnTwo.module.css";
const { wrapper } = styles;

const ColumnTwo = () => {
  return (
    <main id={wrapper}>
      <TopNavigationBarBg />
      <TopNavigationBar />
      <MainPage />
    </main>
  );
};

export default ColumnTwo;
