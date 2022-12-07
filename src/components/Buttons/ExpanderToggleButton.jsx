import React from "react";

import { SIArrow } from "../../assets/SpotifyIcons";

import styles from "./ExpanderToggleButton.module.css";
const { wrapper,expand,collapse } = styles;

const ExpanderToggleButton = ({ btnStyle, svgStyle, btnType, clickHandler }) => {
  return (
    <button className={`${wrapper} ${btnType === 'expand' && expand} ${btnType === "collapse" && collapse}`} style={{ ...btnStyle }} onClick={clickHandler}>
      {btnType === "expand" && <SIArrow svgStyle={svgStyle} />}
      {btnType === "collapse" && <SIArrow svgStyle={svgStyle} />}
    </button>
  );
};

export default ExpanderToggleButton;
