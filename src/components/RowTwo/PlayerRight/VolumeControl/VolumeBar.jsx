import React from "react";

import InnerTrack from "./InnerTrack";
import DragPoint from "./DragPoint";

import styles from "./VolumeBar.module.css";
const { wrapper } = styles;

const VolumeBar = () => {
  return (
    <div className={wrapper}>
      <InnerTrack />
      <DragPoint />
    </div>
  );
};

export default VolumeBar;
