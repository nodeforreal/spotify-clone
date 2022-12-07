import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./ShelfName.module.css";

const ShelfName = ({
  wrapperClass,
  titleText,
  seeMoreText,
  path,
  titleDescText,
}) => {
  const title = (
    <Label labelClass={styles.title} path={path}>
      {titleText}
    </Label>
  );
  const seeMore = (
    <Label isLink={true} path={path} labelClass={styles.seeMore}>
      {seeMoreText}
    </Label>
  );
  return (
    <div className={`${styles.wrapper} ${wrapperClass ? wrapperClass : ""}`}>
      <div className={styles.titleWrapper}>
        {title}
        {path && seeMore}
      </div>
      <p className={styles.titleDesc}>{titleDescText}</p>
    </div>
  );
};

const Label = ({ labelClass, path, children }) => {
  return (
    <span className={`${labelClass}`}>
      {path && <NavLink to={path}>{children}</NavLink>}
      {!path && <span>{children}</span>}
    </span>
  );
};
export default ShelfName;
