import React, { useState } from "react";

import PagePlaylist from "../TrackListRow/PagePlaylist";
import HeadRow from "../TrackListRow/HeadRow";
import ArtistPageTrackListRow from "../TrackListRow/ArtistPageTrackListRow";

import styles from "./ArtistPagePlaylist.module.css";

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ArtistPagePlaylist = () => {
  const [state, setState] = useState({ isInfinite: false, trackListCount: 5 });

  const listToggle = () => {
    setState({
      trackListCount: state.isInfinite ? 5 : list.length,
      isInfinite: !state.isInfinite,
    });
  };

  return (
    <div>
      <h1 className={styles.title}>Popular</h1>
      <PagePlaylist
        gridClass={styles.grid}
        trackTypeClass={styles.trackType}
        relDateClass={styles.relDate}
        dateAddedClass={styles.dateAdded}
        trackDetailsIsHover={true}
      >
        {list.slice(0,state.trackListCount).map((item,index) => {
          return <ArtistPageTrackListRow key={index}/>;
        })}
      </PagePlaylist>
      <div>
        <button onClick={listToggle} className={styles.toggleBtn}>
          {state.isInfinite ? "see more" : "see less"}
        </button>
      </div>
    </div>
  );
};

export default ArtistPagePlaylist;
