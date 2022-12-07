import React from "react";

import styles from "./ArtistNames.module.css";

const ArtistNames = ({ artistList }) => {
  return (
    <div className={styles.wrapper}>
      {artistList.map((name, index) => {
        return <Name name={name} index={index} key={index} />;
      })}
    </div>
  );
};

const Name = ({ index, name }) => {
  return (
    <>
      {index !== 0 && <div className={styles.dot}></div>}

      <span className={styles.artistName}>
        {" name name "}
        <span className={styles.trackName}>{" name name "}</span>
      </span>
    </>
  );
};

export default ArtistNames;
