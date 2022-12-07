import React from "react";

import PlayButton from "../../../Buttons/PlayButton";

import styles from "./CardLogo.module.css";
const { wrapper, playBtn } = styles;

const CardLogo = ({ componentStyle, child, image }) => {
  return (
    <div className={wrapper} style={{ ...componentStyle }}>
      {child}
      <PlayButton btnClass={playBtn} />
    </div>
  );
};

export default CardLogo;
