import React from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import Label from "./Label";

import styles from "./MenuItem.module.css";
const { wrapper } = styles;

const MenuItem = ({ path, icon, labelText, isActive }) => {
  
  return (
    <Link to={path}>
      <div className={wrapper}>
        <Icon icon={icon} isActive={isActive} />
        <Label labelText={labelText} isActive={isActive} />
      </div>
    </Link>
  );
};

export default MenuItem;
