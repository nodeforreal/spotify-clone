import React from "react";

import PagePlaylist from "../TrackListRow/PagePlaylist";
import HeadRow from "../TrackListRow/HeadRow";
import PlaylistTrackListRow from "../TrackListRow/PlaylistTrackListRow";

import styles from "./PlaylistPagePlaylist.module.css";

let data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const PlaylistPagePlaylist = ({ rootMarginTop, stickyTop, wrapperStyle}) => {
  return (
    <div style={{...wrapperStyle}}>
      <PagePlaylist
        gridClass={styles.gridColumns}
        trackTypeClass={styles.trackType}
        relDateClass={styles.relDate}
        dateAddedClass={styles.dateAdded}
      >
        <HeadRow rootMarginTop={rootMarginTop} stickyTop={stickyTop} />
        {data.map((item,index) => {
          return  <PlaylistTrackListRow key={index}  />
        })}
      </PagePlaylist>
    </div>
  );
};

export default PlaylistPagePlaylist;
