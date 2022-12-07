import React from "react";

import { SIGoForward } from "../../../assets/SpotifyIcons";
import styles from "./TrackImage.module.css";
const {
  trackImageWrapper,
  trackImage,
  imageToggle,
  imageToggleOpen,
  imageToggleClose,
} = styles;

const TrackImage = () => {
  return (
    <section className={trackImageWrapper}>
      <img
        className={trackImage}
        src="https://i.pinimg.com/564x/c4/ec/be/c4ecbe7c4c030379e886e5552a7f4ba9.jpg"
        alt=""
      />
      <button className={imageToggleOpen + " " + imageToggle}>
        <SIGoForward />
      </button>
    </section>
  );
};

export default TrackImage;
