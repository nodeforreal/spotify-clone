import React from "react";

import styles from "./Label.module.css";
const {  wrapper, active, noActive } = styles;

const Label = ({ labelText, isActive }) => {
  return (
    <span className={`${wrapper}  ${isActive ? active : noActive}`}>
      {labelText}
    </span>
  );
};

export default Label;
