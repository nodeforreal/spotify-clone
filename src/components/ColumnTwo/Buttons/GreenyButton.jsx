import React from "react";

import styles from "./GreenyButton.module.css";

const GreenyButton = ({ to, labelText }) => {
  return (
    <div className={styles.btn} >
      <a href={to} target='_blank' rel='noopener'>{labelText}</a>
    </div>
  );
};

export default GreenyButton;
