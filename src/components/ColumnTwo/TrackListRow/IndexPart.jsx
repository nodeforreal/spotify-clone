import React from "react";

import PlayButton from "../../Buttons/PlayButton";
import {
  SITrackAlbumOutline,
  SIPodcastOutline,
} from "../../../assets/SpotifyIcons";

import styles from "./IndexPart.module.css";
let isPlaying = false
const IndexPart = ({isNum}) => {
  const numberComponent = <span className={styles.indexNumber}>{"1"}</span>;
  const iconComponent = (<span className={styles.coverIcon}>{true ? <SITrackAlbumOutline /> : <SIPodcastOutline />}</span>);
  return (
    <div className={styles.wrapper} >
      {!isPlaying && isNum && numberComponent}
      {!isPlaying && !isNum && iconComponent}
      <PlayButton btnClass={`${styles.playBtn}`} isPlaying={false} />
    </div>
  );
};

export default IndexPart;
