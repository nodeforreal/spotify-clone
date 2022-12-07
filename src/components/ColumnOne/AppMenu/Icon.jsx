import React from "react";

import styles from "./Icon.module.css";
const { wrapper, active, noActive } = styles;

const Icon = ({ icon, isActive }) => {
  return (
    <span className={`${wrapper}  ${isActive ? active : noActive}`}>
      {isActive ? icon.active : icon.noActive}
    </span>
  );
};

export default Icon;