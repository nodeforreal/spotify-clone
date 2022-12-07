import React from "react";

import NestedRow from "../Row/NestedRow";
import { SIGoBack } from "../../../../assets/SpotifyIcons";

import styles from "./SingleNested.module.css";

const SingleNested = ({ nestName,handleGoBack,handleViews }) => {
  return (
    <div className={styles.wrapper} >
      <button className={styles.goBackBtn} onClick={handleGoBack} >
        <SIGoBack /> {nestName}
      </button>
      <div className={styles.nestedView}>
        <NestedRow rowType={"artist"} clickHandler={()=>handleViews({view:'allArtistsView',viewIndex:2})} handleGoBack={handleGoBack} />
        <NestedRow rowType={"album"} />
        <NestedRow rowType={"album"} />
        <NestedRow rowType={"album"} />
        <NestedRow rowType={"album"} />
      </div>
    </div>
  );
};

export default SingleNested;
