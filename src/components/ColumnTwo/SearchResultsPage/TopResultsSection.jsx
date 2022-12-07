import React from "react";
import TopResultCard from "./TopResultCard";
import SearchResultTrackListRow from "../TrackListRow/SearchResultTrackListRow";

import styles from "./TopResultsSection.module.css";

const TopResultsSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.secLeft}>
        <h1 className={styles.title}>Top Result</h1>
        <TopResultCard />
      </div>
      <div className={styles.secRight}>
        <h1 className={styles.title}>Top Songs</h1>
        <SearchResultTrackListRow isImageNeed={true}/>
        <SearchResultTrackListRow isImageNeed={true}/>
        <SearchResultTrackListRow isImageNeed={true}/>
        <SearchResultTrackListRow isImageNeed={true}/>
      </div>
    </div>
  );
};

export default TopResultsSection;
