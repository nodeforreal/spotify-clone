import React from "react";

import styles from "./SlideTitle.module.css";
const { text } = styles;

const SlideTitle = ({ title }) => {
  return <h1 className={text}>{title}</h1>;
};

export default SlideTitle;
