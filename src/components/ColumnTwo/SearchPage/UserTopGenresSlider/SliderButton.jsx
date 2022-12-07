import React from "react";
import { SIGoForward, SIGoBack } from "../../../../assets/SpotifyIcons";
import styles from "./SliderButton.module.css";
const { wrapper } = styles;

const SliderButton = ({ btnClassName, icon, btnStyle, clickHandler }) => {
  return (
    <button
      className={wrapper + " " + btnClassName}
      style={{ ...btnStyle }}
      onClick={clickHandler}
    >
      {icon === "forward" ? <SIGoForward /> : <SIGoBack />}
    </button>
  );
};

export default SliderButton;
