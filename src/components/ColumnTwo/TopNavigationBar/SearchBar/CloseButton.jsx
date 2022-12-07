import React from "react";

import { SICrossOutline } from  "../../../../assets/SpotifyIcons";

import styles from "./CloseButton.module.css";
const { wrapper } = styles;

const CloseButton = ({ closeHandler }) => {
  return (
    <>
      <button className={wrapper} onClick={closeHandler}>
        <SICrossOutline />
      </button>
    </>
  );
};

export default CloseButton;
