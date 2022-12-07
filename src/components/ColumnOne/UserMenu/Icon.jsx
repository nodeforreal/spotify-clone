import React from "react";

import styles from "./Icon.module.css";
const { wrapper, active, noActive } = styles;

const Icon = ({ icon, isActive,iconStyle }) => {
  return (
    <span className={`${wrapper}  ${isActive ? active : noActive}`} style={{...iconStyle}}>
      {icon}
    </span>
  );
};

export default Icon;
