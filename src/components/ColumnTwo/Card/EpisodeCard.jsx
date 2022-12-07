import React from "react";
import { Link } from "react-router-dom";

import CardImage from "./Card/CardImage";

import styles from "./EpisodeCard.module.css";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const EpisodeCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/episode-card" className={styles.link}></Link>
      <CardImage image={img} />
      <div className={`${styles.title} ${styles.newest}`}>{"Episode Card"}</div>
      <div className={styles.info}>
        <span className={styles.monthAndDuration}>Apr 11 . 11 MIN</span>
      </div>
    </div>
  );
};

export default EpisodeCard;
