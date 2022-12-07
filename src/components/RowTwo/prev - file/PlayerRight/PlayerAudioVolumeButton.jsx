import React from "react";

import {
  // SISoundZero,
  // SISoundOne,
  // SISoundTwo,
  SISoundThree,
} from "../../../assets/SpotifyIcons";

import styles from "./PlayerAudioControlTrack.module.css";
const { volumeButton } = styles;

const PlayerAudioVolumeButton = () => {
  return (
    <button className={volumeButton}>
      <SISoundThree />
    </button>
  );
};

export default PlayerAudioVolumeButton;
