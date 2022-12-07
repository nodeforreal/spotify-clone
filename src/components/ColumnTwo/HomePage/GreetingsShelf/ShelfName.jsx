import React from "react";

import styles from "./ShelfName.module.css";
const { wrapper, title } = styles;

const ShelfName = () => {
  return (
    <div className={wrapper}>
        <h3 className={title}>{"Good afternoon"}</h3>
    </div>
  );
};

export default ShelfName;