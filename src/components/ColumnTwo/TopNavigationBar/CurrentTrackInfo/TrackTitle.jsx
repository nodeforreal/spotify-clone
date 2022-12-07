import React from "react";

import styles from "./TrackTitle.module.css";
const {text } = styles;

const TrackTitle = ({ title }) => {
  return <span className={text}>{title}</span>;
};

export default TrackTitle;
