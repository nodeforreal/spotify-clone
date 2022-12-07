import React from "react";

import { SINext, SIPrevious } from "../../../../assets/SpotifyIcons";

import styles from "./TrackButton.module.css";
const { btn } = styles;

const TrackButton = ({ btnType, btnClass, clickHandler }) => {
  return (
    <button className={`${btn}`}>
      {btnType === "next" && <SINext />}
      {btnType === "prev" && <SIPrevious />}
    </button>
  );
};

export default TrackButton;
