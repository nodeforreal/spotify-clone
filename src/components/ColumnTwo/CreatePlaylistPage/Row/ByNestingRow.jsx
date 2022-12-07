import React from "react";

import { SIGoForward } from "../../../../assets/SpotifyIcons";

import styles from "./ByNestingRow.module.css";

const ByNestingRow = ({ byNestName, clickHandler }) => {
  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      <div className={styles.byNestTitle}>
        <span>{byNestName}</span>
      </div>

      <div className={styles.toggleWrapper}>
        <button className={styles.toggleBtn}>
          <SIGoForward />
        </button>
      </div>
    </div>
  );
};

export default ByNestingRow;
