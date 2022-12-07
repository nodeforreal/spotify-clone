import React from "react";
import { Link } from "react-router-dom";

import PlayButton from "../../Buttons/PlayButton";
import ArtistNames from "./Card/ArtistNames";

import styles from "./LikedSongsCard.module.css";

const LikedSongsCard = ({
  cardStyle,
  path,
  artistList,
  titleText,
  likeInfoText,
}) => {
  return (
    <div className={styles.wrapper} style={{ ...cardStyle }}>
      <ArtistNames artistList={artistList} />
      <div>
        <h2 className={styles.title}>{titleText}</h2>
        <span className={styles.info}>{likeInfoText}</span>
      </div>
      <Link to={path} className={styles.link}></Link>
      <PlayButton btnClass={styles.playBtn} />
    </div>
  );
};

export default LikedSongsCard;
