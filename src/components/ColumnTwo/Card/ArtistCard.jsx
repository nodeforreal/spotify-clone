import React from "react";
import { Link } from "react-router-dom";

import CardImage from "./Card/CardImage";

import styles from "./ArtistCard.module.css";


const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const ArtistCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/episode-card" className={styles.link}></Link>
      <CardImage image={img} imgStyle={{borderRadius:'50%'}}/>
      <div className={styles.name}>{"Dojo Cat"}</div>
      <div className={styles.artist}>Artist</div>
    </div>
  );
};

export default ArtistCard;
