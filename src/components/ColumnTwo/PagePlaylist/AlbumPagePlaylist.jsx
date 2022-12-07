import React from "react";

import PagePlaylist from "../TrackListRow/PagePlaylist";
import HeadRow from "../TrackListRow/HeadRow";
import AlbumPageTrackListRow from "../TrackListRow/AlbumPageTrackListRow";
import CardsShelf from "../CardsShelf/CardsShelf";

import styles from "./AlbumPagePlaylist.module.css";
let shelf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const AlbumPagePlaylist = () => {
  return (
    <section className={styles.wrapper}>
      <PagePlaylist
        gridClass={styles.grid}
        relDateClass={styles.relDate}
        dateAddedClass={styles.dateAdded}
        trackTypeClass={styles.trackType}
      >
        <HeadRow rootMarginTop={"-120px"} stickyTop={"64px"} />
        <AlbumPageTrackListRow isImageNeed={true} />
        <AlbumPageTrackListRow isImageNeed={true} />
        <AlbumPageTrackListRow isImageNeed={true} />
        <AlbumPageTrackListRow isImageNeed={true} />
        <AlbumPageTrackListRow isImageNeed={true} />
        <AlbumPageTrackListRow isImageNeed={true} />
      </PagePlaylist>
      <CopyWrite />
      <div>
        <CardsShelf
          titleOnly={false}
          shelfPath={"/discovery"}
          seeMoreText={"see discovery"}
          titleText={"Title Section"}
        />
      </div>
    </section>
  );
};

let list = [
  "September 26, 1969",
  "© 2015 Apple Corps Ltd",
  "℗ 2015 Calderstone Productions Limited (a division of Universal Music Group)",
];

const CopyWrite = ({}) => {
  return (
    <div className={styles.copyWrite}>
      {list.map((string, index) => {
        if (index === 0) {
          return <p className={styles.p1}>{string}</p>;
        }
        return <p className={styles.p2}>{string}</p>;
      })}
    </div>
  );
};

export default AlbumPagePlaylist;
