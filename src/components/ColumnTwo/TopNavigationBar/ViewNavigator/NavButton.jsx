import React from "react";

import { SIGoForward, SIGoBack } from "../../../../assets/SpotifyIcons";

import styles from "./NavButton.module.css";
const { wrapper, active, noActive } = styles;

const NavButton = ({ btnType, clickHandler, isDisabled}) => {
  
  return (
    <button
      className={wrapper}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {btnType === "backward" && <SIGoBack /> }
      {btnType === "forward" && <SIGoForward />}
    </button>
  );
};

export default NavButton;
