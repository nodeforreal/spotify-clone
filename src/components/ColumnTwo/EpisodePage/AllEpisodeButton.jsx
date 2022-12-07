import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./AllEpisodeButton.module.css";

const AllEpisodeButton = ({ to, label }) => {
  return (
    <div className={styles.btnWrapper}>
      <NavLink to="/show/3627537223" className={styles.btn}>
        See all episodes
      </NavLink>
    </div>
  );
};

export default AllEpisodeButton;
