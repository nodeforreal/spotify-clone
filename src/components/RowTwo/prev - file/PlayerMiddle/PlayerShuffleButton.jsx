import React, { useState } from "react";

import { SIShuffle } from "../../../assets/SpotifyIcons";

import styles from "./PlayerShuffleButton.module.css";
const { playerShuffleButton, activeButton } = styles;

const PlayerShuffleButton = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandler=()=>{
    setIsActive(!isActive)
  }
  return (
    <button
      className={
        isActive
          ? playerShuffleButton + " " + activeButton
          : playerShuffleButton
      }
      onClick={clickHandler}
    >
      <SIShuffle />
    </button>
  );
};

export default PlayerShuffleButton;
