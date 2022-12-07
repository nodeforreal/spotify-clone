import React from "react";

import styles from "./PlayerAudioControlTrack.module.css";
const { audioControlTrack, audioLevelBar, dragThumbCircle } = styles;

const PlayerAudioControlTrack = () => {
  return (
    <>
      <div className={audioControlTrack}>
        <div className={audioLevelBar}></div>
        <div className={dragThumbCircle}></div>
      </div>
    </>
  );
};

export default PlayerAudioControlTrack;
