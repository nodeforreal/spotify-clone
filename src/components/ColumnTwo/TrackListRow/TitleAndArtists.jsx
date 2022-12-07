import React from "react";
import { NavLink } from "react-router-dom";
import ImgWrapper from "../ColumnTwo/ImgWrapper";
import ImagePlayButton from "./ImagePlayButton";
import styles from "./TitleAndArtists.module.css";

const list = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 29,
];

const TitleAndArtists = ({ isImgPlayBtn, isImageNeed, isArtistListNeed }) => {
  return (
    <div className={styles.wrapper}>
      {isImageNeed && !isImgPlayBtn && (
        <ImgWrapper wrapperClass={styles.trackImage} />
      )}
      {isImageNeed && isImgPlayBtn && <ImagePlayButton />}
      <div className={styles.sectionTwo}>
        <div className={styles.title}>{"lorem ipsum lorem ipsum"}</div>
        {isArtistListNeed && (
          <div className={styles.artistsList}>
            {isArtistListNeed && <ArtistList listItems={list} />}
            {false && (
              <span className={styles.episodeTitle}>{"Title title 123"}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ArtistList = ({ listItems }) => {
  return (
    <>
      {listItems.map(({ path, text }, index) => {
        return (
          <span key={index}>
            {index !== 0 && ","}
            {index !== 0 && " "}
            <span className={styles.artistItem}>
              <NavLink to={"/path"}>{"text"}</NavLink>
            </span>
          </span>
        );
      })}
    </>
  );
};
export default TitleAndArtists;
