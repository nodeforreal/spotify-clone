import React from "react";
import styles from "./UpgradeButtonContainer.module.css";

const UpgradeButtonContainer = () => {
  let upgradePageLink =
    "https://www.spotify.com/in-en/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade";
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.btn}
        href={upgradePageLink}
        target="_blank"
        rel="norefferrer"
      >
        Upgrade
      </a>
    </div>
  );
};

export default UpgradeButtonContainer;
