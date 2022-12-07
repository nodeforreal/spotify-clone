import React from "react";

import styles from "./Label.module.css";
const { text } = styles;

const Label = ({ labelText }) => {
    console.log(text);
  return <span className={text}>{labelText}</span>;
};

export default Label;
