import React from "react";

import styles from "./CardTitle.module.css";
const { text } = styles;

const CardTitle = ({ title }) => {
  return <h3 className={text}>{title}</h3>;
};

export default CardTitle;