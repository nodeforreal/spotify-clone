import React from "react";
import { SIGoForward, SIGoBack } from "../../../../assets/SpotifyIcons";
import styles from "./SliderButton.module.css";
const { wrapper } = styles;

const SliderButton = ({  btnClass,  btnType, clickHandler }) => {
  return (
    <button
      className={wrapper + " " + btnClass}
      onClick={clickHandler}
    >
      {btnType === "forward" ? <SIGoForward /> : <SIGoBack />}
    </button>
  );
};

export default SliderButton;
