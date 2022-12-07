import React from "react";

import { SIRepeat, SIRepeatOne } from "../../../../assets/SpotifyIcons";
import styles from './TrackLoopButton.module.css';
const { btn, active } = styles;

const TrackLoopButton = ({ select }) => {
  return (
    <button className={`${btn} ${false && active}`}>
      {false && <SIRepeat />}
      {true && <SIRepeatOne />}
    </button>
  );
};

export default TrackLoopButton;
