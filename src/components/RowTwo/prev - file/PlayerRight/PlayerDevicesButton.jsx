import React from "react";

import useMatch from "../../../hooks/useMatchPath";
import { SIDevices } from "../../../assets/SpotifyIcons";

import styles from "./PlayerDevicesButton.module.css";
const { devicesButton, activeButton } = styles;

const PlayerDevicesButton = () => {
  const { isMatch } = useMatch();

  return (
    <button
      to="/lyrics"
      className={isMatch ? `${activeButton} ${devicesButton}` : devicesButton}
    >
      <SIDevices />
    </button>
  );
};

export default PlayerDevicesButton;
