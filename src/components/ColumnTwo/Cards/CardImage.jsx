import React from "react";
import ImgWrapper from '../ColumnTwo/ImgWrapper';
import PlayButton from '../../Buttons/PlayButton'
import styles from "./CardImage.module.css";

const CardImage = ({ cardType, img }) => {
  return (
    <ImgWrapper wrapperClass={`${styles.imgWrapper} ${
      cardType === "artist" && styles.profileWrapper
    }`}
    image={img}
    >
      {false && <ImgWrapper wrapperClass={styles.stuffImage} image={img}/>}
      <PlayButton btnClass={styles.playBtn} isPlaying={true}/>
    </ImgWrapper>
  );
};

export default CardImage;
