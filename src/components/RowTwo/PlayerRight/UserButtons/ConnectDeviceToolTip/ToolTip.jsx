import React from "react";

import { SIHelp } from "../../../../../assets/SpotifyIcons";
import connectDevicesPng from "../../../../../assets/PNG/DevicesOutline.png";
import GreenyButton from "../../../../ColumnTwo/Buttons/GreenyButton";

import styles from "./ToolTip.module.css";
const { wrapper, rowOne, rowTwo, rowThree, rowFour } = styles;

const ToolTip = () => {
  let helpLink = 'https://support.spotify.com/in-en/article/spotify-connect/?utm_source=wp-picker&utm_medium=web'
  return (
    <div className={wrapper}>
      <span className={rowOne}>
        <span>Connect to a device</span>
        <SIHelp />
      </span>

      <div className={rowTwo}>
        <img src={connectDevicesPng} alt="" />
      </div>

      <div className={rowThree}>
        <p>Play and control Spotify on all your devices.</p>
        <p>
          Start spotify on another device and it will magically appear here.
        </p>
      </div>

      <div className={rowFour}>
        <GreenyButton to={helpLink} labelText='Learn More' />
      </div>
    </div>
  );
};

export default ToolTip;
