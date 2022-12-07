import React from "react";

import ControlsContainer from "./PlayerMid/ControlsContainer";
import TrackDurationInfoContainer from "./PlayerMid/TrackDurationInfoContainer";

import styles from "./PlayerMidContainer.module.css";
const { wrapper } = styles;

const PlayerMidContainer = () => {
  return (
    <div className={wrapper}>
      <ControlsContainer />
      <TrackDurationInfoContainer />
    </div>
  );
};

export default PlayerMidContainer;
