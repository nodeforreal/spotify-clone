import React from "react";
import { Link } from "react-router-dom";

import Label from "./Label";
import Icon from "./Icon";

import styles from "./MenuItem.module.css";
const { wrapper } = styles;

const MenuItem = ({ labelText, icon, path }) => {
  return (
    <Link to={path}>
      <div className={wrapper}>
        <Label labelText={labelText} />
        <Icon icon={icon} />
      </div>
    </Link>
  );
};

export default MenuItem;
