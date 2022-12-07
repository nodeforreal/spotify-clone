import React from "react";

import { SITrackAlbumOutline } from "../../../assets/SpotifyIcons";
import FindTracksTemplate from "../FindTracksTemplate/FindTracksTemplate";

import styles from "./LikedPageUserFirstView.module.css";

const LikedPageUserFirstView = () => {
  return (
    <div className={styles.wrapper}>
      <FindTracksTemplate
        iconClass={styles.tuneIcon}
        svg={<SITrackAlbumOutline />}
        title={"Songs you like will appear here"}
        subPara={"Save songs by tapping the heart icon."}
        path={"/search"}
        labelText={"Find songs"}
      />
    </div>
  );
};

export default LikedPageUserFirstView;
