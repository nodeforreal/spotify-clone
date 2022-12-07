import React from "react";

import UserButtonsContainer from "./PlayerRight/UserButtonsContainer";
import VolumeControlContainer from "./PlayerRight/VolumeControlContainer";

import styles from "./PlayerRightContainer.module.css";
const { wrapper } = styles;

const PlayerRightContainer = () => {
  return (
    <div className={wrapper}>
      <UserButtonsContainer />
      <VolumeControlContainer />
    </div>
  );
};

export default PlayerRightContainer;
