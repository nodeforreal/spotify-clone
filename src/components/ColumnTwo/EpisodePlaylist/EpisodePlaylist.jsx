import React from "react";

import EpisodeTrackListRow from "../EpisodeTrackListRow/EpisodeTrackListRow";

import styles from "./EpisodePlaylist.module.css";
let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const EpisodePlaylist = ({onlyEpisodeTitle}) => {
  return (
    <div className={styles.wrapper}>
      {data.map((item,index) => (
        <EpisodeTrackListRow key={index} onlyEpisodeTitle={onlyEpisodeTitle}/>
      ))}
    </div>
  );
};

export default EpisodePlaylist;
