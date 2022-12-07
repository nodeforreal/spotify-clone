import React from "react";

import styles from "./CardTitle.module.css";
const { text } = styles;

const CardTitle = ({ titleText }) => {
  return <div className={text}>{titleText}</div>;
};

export default CardTitle;
