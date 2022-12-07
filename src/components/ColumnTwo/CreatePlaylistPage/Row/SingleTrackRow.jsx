import React from "react";
import { Link } from "react-router-dom";
import useSingleSelection from "../../../../hooks/useSingleSelection";

import PlayButton from "../../../Buttons/PlayButton";

import styles from "./SingleTrackRow.module.css";
import './SingleTrackRow.css'
const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const data = [
  0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const SingleTrackRow = ({}) => {
  const [selectionHandler] = useSingleSelection()
  return (
    <div
      onClick={selectionHandler}
      role="row"
      aria-selected="false"
      className={styles.wrapper}
    >
      <div className={styles.sectionOne}>
        <div className={styles.imgWrapper}>
          <img src={img} alt="" />
          <div className={`${styles.playBtnWrapper} ${'track-list__play-btn-wrapper'}`}>
            <PlayButton btnClass={styles.playBtn} />
          </div>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.title}>
            <span> {"Title title tiler Title title tiler"}</span>
          </div>
          <div className={styles.artistList}>
            {data.map((item, index) => (
              <span key={index} className={styles.artistItem}>
                {index !== 0 && ","}
                {index !== 0 && " "}
                <Link to="/artist">{"item" + item}</Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.albumLinkWrapper}>
        <Link className={styles.albumLink} to={"album"}>
          <span> {"Title title tiler Title title tiler"}</span>
        </Link>
      </div>

      <div className={styles.toggleWrapper}>
        <button className={styles.addBtn}>Add</button>
      </div>
    </div>
  );
};

export default SingleTrackRow;
