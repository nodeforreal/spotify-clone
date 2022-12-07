import React from "react";

import styles from "./Description.module.css";
let text = 'Lorem ipsum'
const Description = ({ wrapperClass, descText }) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`}>
      <span className={styles.descEllipsis}>
        <span className={styles.descText}>{text}</span>
      </span>
    </div>
  );
};

export default Description;
