import React from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import Label from "./Label";

import styles from "./MenuItem.module.css";
const { wrapper } = styles;

const MenuItem = ({ path, icon, labelText, isActive ,iconStyle }) => {
  
  return (
    <Link to={path}>
      <div className={wrapper}>
        <Icon icon={icon} isActive={isActive} iconStyle={iconStyle} />
        <Label labelText={labelText} isActive={isActive} />
      </div>
    </Link>
  );
};

export default MenuItem;
