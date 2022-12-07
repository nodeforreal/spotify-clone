import React from "react";

import HeadRow from "./HeadRow";
import TrackListRow from "./TrackListRow";

import styles from "./PagePlaylist.module.css";

const PagePlaylist = ({ rowHead, rowClass }) => {
  return (
    <div className={styles.wrapper}>
        <HeadRow {...rowHead} rowClass={rowClass} />
      <div className={styles.sectionTwo}>
        <TrackListRow rowClass={'daily-mix'} rowIndex={1} />
        <TrackListRow rowClass={rowClass} rowIndex={2} />
        <TrackListRow rowClass={rowClass} rowIndex={3} />
        <TrackListRow rowClass={rowClass} rowIndex={4} />
        <TrackListRow rowClass={rowClass} rowIndex={5} />
        <TrackListRow rowClass={rowClass} rowIndex={6} />
        <TrackListRow rowClass={rowClass} rowIndex={7} />
        <TrackListRow rowClass={rowClass} rowIndex={8} />
      </div>
    </div>
  );
};

export default PagePlaylist;
