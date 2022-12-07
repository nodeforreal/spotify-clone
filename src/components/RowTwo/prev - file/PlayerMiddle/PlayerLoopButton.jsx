import React, { useState } from "react";

import { SIRepeat, SIRepeatOne } from "../../../assets/SpotifyIcons";

import styles from "./PlayerLoopButton.module.css";
const { playerLoopButton, activeButton } = styles;

const PlayerLoopButton = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      className={
        isActive ? playerLoopButton + " " + activeButton : playerLoopButton
      }
      onClick={clickHandler}
    >
      <SIRepeat />
    </button>
  );
};

export default PlayerLoopButton;
