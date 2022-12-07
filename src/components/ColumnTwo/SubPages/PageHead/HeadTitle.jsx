import React from "react";

import styles from "./HeadTitle.module.css";

const HeadTitle = ({ titleText }) => {
  return <h2 className={styles.title}>{titleText}</h2>;
};

export default HeadTitle;
