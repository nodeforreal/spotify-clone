import React from "react";
import { Link } from "react-router-dom";

import Label from "./Label";

import styles from "./MenuItem.module.css";
const { wrapper } = styles;

const MenuItem = ({ path, labelText, isActive }) => {
  
  return (
    <Link to={path}>
      <div className={wrapper}>
        <Label labelText={labelText} isActive={isActive} />
      </div>
    </Link>
  );
};

export default MenuItem;
