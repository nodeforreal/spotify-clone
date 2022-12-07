import React from "react";
import { Link } from "react-router-dom";
import useSingleSelection from "../../../hooks/useSingleSelection";

import PlayButton from "../../Buttons/PlayButton";
import OptionButton from "../Buttons/OptionButton";
import LikeButton from "../../Buttons/LikeButton";

import {
  SITrackAlbumOutline,
  SIPodcastOutline,
} from "../../../assets/SpotifyIcons";

import styles from "./TrackListRow.module.css";
import "./TrackListRow.css";
const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const TrackListRow = ({ rowClass }) => {
  const [selectionHandler] = useSingleSelection()
  return (
    <div className={`${styles.wrapper} ${rowClass}-sectionOne`}   aria-selected="false" onClick={selectionHandler}>
      <div className={styles.index}>
        <div>
          {rowClass === "create-playlist" ? (
            false ? (
              <span className={`${styles.trackTypeIcon} ${'track-list__track-type-icon'}`}>
                <SIPodcastOutline />
              </span>
            ) : (
              <span className={`${styles.trackTypeIcon} ${'track-list__track-type-icon'}`}>
                <SITrackAlbumOutline />
              </span>
            )
          ) : (
            <span className={`${styles.indexNumber} ${'track-list__index-number'}`}>{"1"}</span>
          )}
        </div>

        <div className={styles.playBtnWrapper}>
          <PlayButton btnClass={`${styles.playBtn} ${'track-list__play-btn'}`} />
        </div>
      </div>

      <div className={styles.title}>
        <div className={styles.imgWrapper}>
          <img src={img} alt="" />
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.songTitle}>
            <span> {"Title title title Title title title"}</span>
          </div>

          <div className={styles.artistList}>
            {data.map((item, index) => (
              <span key={index} className={`${styles.artistItem} ${'track-list__artist-item'}`}>
                {index !== 0 && ","}
                {index !== 0 && " "}
                <Link to="/artist">{"item" + item}</Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.trackType} ${rowClass}-trackType ${'track-list__track-type'}`}>
        <Link to={"/album"}>{"lorem ipsum merre ikiya"}</Link>
      </div>

      <div className={`${styles.relDate} ${rowClass}-relDate`}>
        <span>jun 30</span>
      </div>

      <div
        className={`${styles.dateAdded} ${rowClass}-dateAdded`}
        aria-label="dateAdded"
      >
        <span>7 days ago</span>
      </div>

      <div className={styles.duration} aria-label="duration">
        <span className={styles.addToLibrary}>
          <LikeButton btnClass={`${styles.likeBtn} ${'track-list__like-btn'}`} btnType='like'  />
        </span>
        <span>{4.22}</span>
        <span className={styles.Btn}>
          <OptionButton btnClass={`${styles.optionBtn} ${'track-list__option-btn'}`} />
        </span>
      </div>
    </div>
  );
};

export default TrackListRow;
