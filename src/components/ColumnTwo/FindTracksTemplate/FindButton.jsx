import React from "react";
import { Link } from "react-router-dom";

import styles from "./FindButton.module.css";
const { link, btn, text } = styles;

const FindButton = ({ path, labelText }) => {
  return (
    <span className={btn}>
      <Link to={path} className={link}></Link>
      <span className={text}>{labelText}</span>
    </span>
  );
};

export default FindButton;

