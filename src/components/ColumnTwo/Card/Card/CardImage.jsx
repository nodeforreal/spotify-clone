import React from "react";

import PlayButton from "../../../Buttons/PlayButton";

import styles from "./CardImage.module.css";
const { wrapper, playBtn } = styles;

const CardImage = ({ imgStyle, image }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="" loading="lazy" style={{ ...imgStyle }} />
      <PlayButton btnClass={styles.playBtn} />
    </div>
  );
};

export default CardImage;
