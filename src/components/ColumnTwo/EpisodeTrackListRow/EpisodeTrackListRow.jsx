import React from "react";
import { NavLink } from "react-router-dom";

import SecTop from "./SecTop";
import SecMid from "./SecMid";
import SecBottom from "./SecBottom";

import SplitterLine from "../ColumnTwo/SplitterLine";

import styles from "./EpisodeTrackListRow.module.css";

const imgData =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const EpisodeTrackListRow = ({onlyEpisodeTitle}) => {
  return (
    <div className={styles.wrapper}>
      <SplitterLine  lineClass={styles.splitterLine}/>
      <NavLink className={styles.episodeNavLink} to="/episode" />
      <div className={styles.rowWrapper}>
        <div className={styles.secLeft}>
          <div className={styles.imgWrapper}>
            <img src={imgData} alt="" />
          </div>
        </div>
        <div className={styles.secRight}>
          <SecTop onlyEpisodeTitle={onlyEpisodeTitle}/>
          <SecMid />
          <SecBottom />
        </div>
      </div>
    </div>
  );
};

export default EpisodeTrackListRow;
