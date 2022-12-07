import React from "react";

import AlbumsRow from "../Row/NestedRow";
import { SIGoBack } from "../../../../assets/SpotifyIcons";

import styles from "./ArtistNested.module.css";

const ArtistNested = ({ nestName, handleGoBack,handleViews }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.goBackBtn} onClick={handleGoBack}>
        <SIGoBack /> {nestName}
      </button>
      <div className={styles.nestedView}>
        <div className={styles.nestWrapper}>
          <h2 className={styles.title}>Popular songs</h2>
          <AlbumsRow rowType={"album"} clickHandler={()=>handleViews({view:'artistView',viewIndex:2})} />

        </div>
        <div className={styles.albumSongs}>
          <h2 className={styles.title}>Album</h2>
          <AlbumsRow rowType={"album"} clickHandler={()=>handleViews({view:'allArtistsView',viewIndex:3})} />
        </div>
      </div>
    </div>
  );
};

export default ArtistNested;
