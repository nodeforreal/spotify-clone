import React from "react";

import styles from "./DurationTime.module.css";
const { text } = styles;

const DurationTime = ({ time }) => {
  return <div className={text}>{time}</div>;
};

export default DurationTime;
