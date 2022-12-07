import React from "react";

import PlayButton from "../../Buttons/PlayButton";
import TrackTitle from "./CurrentTrackInfo/TrackTitle";

import styles from "./CurrentTrackInfoContainer.module.css";
const { wrapper, playBtn } = styles;

const CurrentTrackInfoContainer = () => {
  return (
    <div className={wrapper}>
      <PlayButton btnClass={playBtn} />
      <TrackTitle
        title={
          "Romantic Hits  l;dslk fsf;lsfsdjfspdfs fsdpjfspfjsdpofjspfs fspf spfs f s fspf spf sp fjspf"
        }
      />
    </div>
  );
};

export default CurrentTrackInfoContainer;
