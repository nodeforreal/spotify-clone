import React from "react";

import ColumnOne from "../components/ColumnOne";
import ColumnTwo from "../components/ColumnTwo";
import RowTwo from "../components/RowTwo";

import styles from "./AppLayout.module.css";
const { layout } = styles;

const AppLayout = () => {
  return (
    <main id={layout}>
      <ColumnOne />
      <ColumnTwo />
      <RowTwo />
    </main>
  );
};

export default AppLayout;
