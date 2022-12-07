import React from "react";

import ShelfName from "../CardsShelf/ShelfName";
import PlaylistPagePlaylist from "../PagePlaylist/PlaylistPagePlaylist";

import styles from "./UserTopTrackListView.module.css";

const UserTopTrackListView = () => {
  return (
    <div className={styles.wrapper}>
      <ShelfName
        wrapperClass={styles.sectionName}
        titleText="Top tracks this month"
        titleDescText="Only visible to you."
      />
      <PlaylistPagePlaylist rootMarginTop={"-120px"} stickyTop="64px" />
    </div>
  );
}

export default UserTopTrackListView;
