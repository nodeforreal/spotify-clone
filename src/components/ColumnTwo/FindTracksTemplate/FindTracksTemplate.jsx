import React from "react";

import FindButton from "./FindButton";

import styles from "./FindTracksTemplate.module.css";

const FindTracksTemplate = ({ templateClass,iconClass, svg, title, subPara, path, labelText }) => {
  
  return (
    <div className={`${styles.wrapper} ${templateClass}`}>
      <div className={`${styles.icon} ${iconClass}`}>{svg}</div>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{subPara}</p>
      </div>
      <FindButton path={path} labelText={labelText} />
    </div>
  );
};

export default FindTracksTemplate;
