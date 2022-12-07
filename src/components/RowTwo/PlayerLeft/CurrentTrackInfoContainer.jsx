import React from "react";

import TrackName from './CurrentTrackInfo/TrackName';
import ArtistNames from './CurrentTrackInfo/ArtistNames';

import styles from "./CurrentTrackInfoContainer.module.css";
const { wrapper } = styles;

const CurrentTrackInfoContainer = ({ nameList }) => {
  return (
    <div className={wrapper}>
      <TrackName name={"what is closure ?"} />
      <ArtistNames nameList={nameList} />
    </div>
  );
};

export default CurrentTrackInfoContainer;
