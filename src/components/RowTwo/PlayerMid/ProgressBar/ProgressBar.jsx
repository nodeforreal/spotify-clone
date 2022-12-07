import React from "react";

import InnerTrack from "./InnerTrack";
import DragPoint from "./DragPoint";

import styles from "./ProgressBar.module.css";
const { bar } = styles;

const ProgressBar = () => {
  return (
    <div className={bar}>
      <InnerTrack />
      <DragPoint />
    </div>
  );
};

export default ProgressBar;
