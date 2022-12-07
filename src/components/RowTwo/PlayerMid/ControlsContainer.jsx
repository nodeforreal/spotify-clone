import React from "react";

import ShuffleButton from "./Controls/ShuffleButton";
import TrackButton from "./Controls/TrackButton";
import PlayButton from "../../Buttons/PlayButton";
import TrackLoopButton from "./Controls/TrackLoopButton";

import styles from "./ControlsContainer.module.css";
const { wrapper, playBtn } = styles;

const ControlsContainer = () => {
  return (
    <div className={wrapper}>
      <ShuffleButton />
      <TrackButton btnType={"prev"} />
      <PlayButton btnClass={playBtn} />
      <TrackButton btnType={"next"} />
      <TrackLoopButton select={0} />
    </div>
  );
};

export default ControlsContainer;
