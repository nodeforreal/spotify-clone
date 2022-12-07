import React from "react";

import LyricsButton from "./UserButtons/LyricsButton";
import QueueButton from "./UserButtons/QueueButton";
import DevicesButton from "./UserButtons/DevicesButton";

import styles from "./UserButtonsContainer.module.css";
const { wrapper } = styles;

const UserButtonsContainer = () => {
  return (
    <div className={wrapper}>
      <LyricsButton />
      <QueueButton />
      <DevicesButton />
    </div>
  );
};

export default UserButtonsContainer;
