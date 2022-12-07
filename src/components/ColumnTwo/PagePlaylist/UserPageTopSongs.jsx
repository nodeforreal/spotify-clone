import React from "react";

import PagePlaylist from "../TrackListRow/PagePlaylist";
import MixTrackListRow from "../TrackListRow/MixTrackListRow";
import ShelfName from "../CardsShelf/ShelfName";

import styles from "./UserPageTopSongs.module.css";

const UserPageTopSongs = () => {
  return (
    <>
      <PagePlaylist gridClass={styles.grid} albumLinkClass={styles.albumLink}>
        <ShelfName
        wrapperClass={styles.titleWrapper}
          path="top/tracks"
          seeMoreText="see more"
          titleDescText="Only visible to you."
          titleText="Top tracks this month"
        />
        <MixTrackListRow />
        <MixTrackListRow />
        <MixTrackListRow />
        <MixTrackListRow />
      </PagePlaylist>
    </>
  );
};

export default UserPageTopSongs;
