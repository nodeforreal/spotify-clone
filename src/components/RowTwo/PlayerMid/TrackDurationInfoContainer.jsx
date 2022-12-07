import React from "react";

import DurationTime from "./ProgressBar/DurationTime";
import ProgressBar from "./ProgressBar/ProgressBar";

import styles from "./TrackDurationInfoContainer.module.css";
const { wrapper } = styles;

const TrackDurationInfoContainer = () => {
  return (
    <div className={wrapper}>
      <DurationTime time={'00:00'}/>
      <ProgressBar / >
      <DurationTime time={'04:00'}/>
    </div>
  );
};

export default TrackDurationInfoContainer;
