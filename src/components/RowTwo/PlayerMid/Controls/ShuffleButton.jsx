import React from "react";

import { SIShuffle } from "../../../../assets/SpotifyIcons";

import styles from "./ShuffleButton.module.css";
const { btn } = styles;

const ShuffleButton = () => {
    
  return (
    <button className={btn}>
      <SIShuffle />
    </button>
  );
};

export default ShuffleButton;
