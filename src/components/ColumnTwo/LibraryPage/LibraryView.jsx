import React from "react";

import CardsSectionView from "../CardsSectionView/CardsSectionView";
import LibraryPlaylistCards from "./LibraryPlaylistCards";
import LibraryPodcastsCards from "./LibraryPodcastsCards";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./LibraryView.module.css";

const LibraryView = ({ viewTitle, view }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{viewTitle}</h1>
      <div>
        {view === 'playlists' && <LibraryPlaylistCards />}
        {view === 'podcasts' && <LibraryPodcastsCards />}
        {view === 'artists' && <CardsSectionView />}
        {view === 'albums' && <CardsSectionView />}
      </div>
      <PageEndLine  lineClass={styles.line}/>
    </div>
  );
};

export default LibraryView;
