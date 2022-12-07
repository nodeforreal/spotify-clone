import React from "react";

import { SIPlay, SIPause } from "../../assets/SpotifyIcons";

import styles from "./PlayButton.module.css";

const PlayButton = ({ btnClass, isPlaying, clickHandler }) => {
  return (
    <button
      className={`${styles.btn} ${btnClass} ${isPlaying && styles.playing}`}
      onClick={() => clickHandler}
    >
      {true ? <SIPlay /> : <SIPause />}
    </button>
  );
};

export default PlayButton;
