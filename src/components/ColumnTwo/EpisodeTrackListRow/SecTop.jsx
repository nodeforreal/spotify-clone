import React from "react";
import { NavLink } from "react-router-dom";
import OptionButton from "../Buttons/OptionButton";

import styles from "./SecTop.module.css";

const SecTop = ({ onlyEpisodeTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <div>
          <Title className={styles.episodeTitle} to="/episode/3274239482" />
        </div>
        <div>
          {!onlyEpisodeTitle && (
            <Title className={styles.showTitle} to="/show/372987928" />
          )}
        </div>
      </div>
      <div className={styles.optionBtnWrapper}>
        <OptionButton btnClass={styles.optionBtn} />
      </div>
    </div>
  );
};

const Title = ({ to, isPlaying, label, className }) => {
  return (
    <NavLink
      to={to}
      className={`${className} ${isPlaying ? styles.activePlaying : ""}`}
    >
      {"Lorem ipsum and part of sentence"}
    </NavLink>
  );
};
export default SecTop;
