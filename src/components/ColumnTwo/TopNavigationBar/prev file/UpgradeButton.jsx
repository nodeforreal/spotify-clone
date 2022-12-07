import React from "react";
import { Link } from "react-router-dom";

import styles from "./UpgradeButton.module.css";

const { wrapper } = styles;

const UpgradeButton = () => {
  return (
    <Link to="/upgrade" className={wrapper}>
      upgrade
    </Link>
  );
};

export default UpgradeButton;
