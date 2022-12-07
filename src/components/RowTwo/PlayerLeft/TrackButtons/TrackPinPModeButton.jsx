import React from "react";

import { SIPInP } from "../../../../assets/SpotifyIcons";

import styles from "./TrackPinPModeButton.module.css";
const { btn } = styles;

const TrackPinPModeButton = ({clickHandler }) => {
  return (
    <button className={btn} onClick={clickHandler}>
      <SIPInP />
    </button>
  );
};

export default TrackPinPModeButton;
