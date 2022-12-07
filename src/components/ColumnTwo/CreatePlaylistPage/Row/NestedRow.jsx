import React from "react";

import {SIGoForward } from "../../../../assets/SpotifyIcons";

import styles from "./NestedRow.module.css";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

  
const NestedRow = ({ rowType, clickHandler }) => {
  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      <div className={`${styles.imgWrapper} ${rowType === 'album' && styles.albumImg} ${rowType === 'artist' && styles.artistImg}`}>
        <img src={img} alt="" />
      </div>

      <div className={styles.infoWrapper}>
        <span className={styles.title}>{"Title"}</span>
        <span className={styles.rowName}>{rowType}</span>
      </div>
      
      <div className={styles.toggleWrapper}>
        <button className={styles.toggleBtn} >
          <SIGoForward />
        </button>
      </div>
    </div>
  );
};

export default NestedRow;
