import React from "react";

import VolumeBar from "./VolumeControl/VolumeBar";
import VolumeStateIcon from "./VolumeControl/VolumeStateIcon";

import styles from "./VolumeControlContainer.module.css";
const { wrapper } = styles;

const VolumeControlContainer = () => {
  return (
    <div className={wrapper}>
      <VolumeStateIcon />
      <VolumeBar />
    </div>
  );
};

export default VolumeControlContainer;
