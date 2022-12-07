import React from "react";

import RowHead from "../TrackListRow/HeadRow";
import CreatePlaylistTrackListRow from "../TrackListRow/CreatePlaylistTrackListRow";
import PagePlaylist from "../TrackListRow/PagePlaylist";

import {data} from './mock';

import styles from "./CreatePlaylistPagePlaylist.module.css";

const CreatePlaylistPagePlaylist = ({rootMarginTop,stickyTop}) => {
  console.log(data.items)
  return (
    <>
      <PagePlaylist
        gridClass={styles.gridColumns}
        trackTypeClass={styles.trackType}
        relDateClass={styles.relDate}
        dateAddedClass={styles.dateAdded}
      >
        <RowHead rootMarginTop={rootMarginTop} stickyTop={stickyTop}/>

        <CreatePlaylistTrackListRow isImageNeed={true}/>
        <CreatePlaylistTrackListRow isImageNeed={true}/>
        <CreatePlaylistTrackListRow isImageNeed={true}/>
        <CreatePlaylistTrackListRow isImageNeed={true}/>
        <CreatePlaylistTrackListRow isImageNeed={true}/>
        <CreatePlaylistTrackListRow isImageNeed={true}/>
  
      </PagePlaylist>
    </>
  );
};

export default CreatePlaylistPagePlaylist;
