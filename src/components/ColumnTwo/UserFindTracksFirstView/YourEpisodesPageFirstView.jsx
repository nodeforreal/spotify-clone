import React from "react";

import { SIAddCircleOutline } from "../../../assets/SpotifyIcons";
import FindTracksTemplate from "../FindTracksTemplate/FindTracksTemplate";

import styles from "./YourEpisodesPageFirstView.module.css";

const YourEpisodesPageFirstView = () => {
  return (
    <div className={styles.wrapper}>
      <FindTracksTemplate
        iconClass={styles.tuneIcon}
        svg={<SIAddCircleOutline />}
        title={"Songs you like will appear here"}
        subPara={"Save songs by tapping the heart icon."}
        path={"/search"}
        labelText={"Find songs"}
      />
    </div>
  );
};

export default YourEpisodesPageFirstView;
